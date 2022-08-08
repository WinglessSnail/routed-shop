import "../../styles/login.css";
import Header from "./header/header.jsx";
import { Link, Outlet } from "react-router-dom";

const Login = (e) => {
  return (
    <>
      <Header />
      <div className="loginform">
        <label id="label" for="user">
          user name
        </label>
        <br />
        <input id="user" placeholder="user name"></input>

        <label id="label" for="password">
          password
        </label>
        <br />
        <input id="password" type="password" placeholder="password"></input>
        <Link className="loglink" to="/products">
          {" "}
          <button className="login">Login</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
