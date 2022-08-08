import Header from "./components/header.jsx";
import Login from "./components/login/login.jsx";
import "./styles/main.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
