import "../../styles/login.css";
import Header from "./header/header.jsx";

const Login = (e) => {
  return (
    <>
      <Header/>
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
      </div>
    </>
  );
};

export default Login;
