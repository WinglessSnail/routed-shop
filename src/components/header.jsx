import "../styles/header.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <span className="logo">Routed shop</span>
        <ul>
          <li className="link" onClick={()=>navigate("/products")}>Products page</li>
        </ul>

        <span className="badge">{props.name}</span>

        <button className="button" onClick={() => navigate("/login")}>
          logout
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
