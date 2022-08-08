import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <span className="logo">Routed shop</span>
        <ul>
          <Link className="link" to="/products">
            <li>Products page</li>
          </Link>
        </ul>

        <span className="badge">user's name</span>

        <button className="button">
          <Link className="link" to="/Login">
            logout
          </Link>
        </button>

        <input
          type="search"
          className="searchBar"
          placeholder="search here"
        ></input>
        <button className="searchBtn">Search</button>
      </header>
    </>
  );
};
export default Header;
