import "../../styles/login.css";
import Header from "./header/header.jsx";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const handleLoginClick = () => {
    fetch("http://localhost:3000/users.json")
    .then((res) => res.json())
    .then(
      (users) => {
        const user = users.find(
          (u) => u.name === name && u.password === password
          );
          if (user) {
            props.setUserName(name);
            navigate("/products")
          } else {
            alert("user does not exist");
          }
        },
        (error) => {
          alert("data not found");
        }
      );
  };

  const handleNameChange = e => {
    setName(e.target.value)
  };
  const handlePassChange = e => {
    setPassword(e.target.value)
  };

  return (
    <>
      <Header />
      <div className="loginform">
        <label id="label" for="user">
          user name
        </label>
        <br />
        <input
          id="user"
          placeholder="user name"
          value={props.name}
          onChange={handleNameChange}
        ></input>

        <label id="label" for="password">
          password
        </label>
        <br />
        <input
          id="password"
          // type="password"
          placeholder="password"
          value={password}
          onChange={handlePassChange}
        ></input>
        <button className="login" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
