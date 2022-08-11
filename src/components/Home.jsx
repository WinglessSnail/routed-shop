import { Link, Outlet } from "react-router-dom";

export const Home = () => {


  return (
    <>
    <h1>home page</h1>
      <Link to="login">
      <br/>
        <h3>to login page</h3>
      <br/>
      <hr/>
      </Link>
      <Outlet /> 
    </>
  );
};
