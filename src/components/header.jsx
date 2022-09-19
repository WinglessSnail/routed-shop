import { useNavigate } from "react-router-dom";
import debounce from "lodash.debounce";
import "../styles/header.css";

const Header = (props) => {
  const {setSearch} = props
  const navigate = useNavigate();

  const updateQuery = e => setSearch(e?.target?.value);

  const debounceOnChange = debounce(updateQuery , 400)

  return (
    <>
      <header className="header">
        <span className="logo">Routed shop</span>
        <ul>
          <li
            className="link"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products page
          </li>
        </ul>

        <span className="badge">{props.name}</span>

        <button className="button" onClick={() => navigate("/login")}>
          logout
        </button>

        <input
          type="search"
          className="searchBar"
          placeholder="search here"
          onChange={debounceOnChange}
        ></input>
      </header>
    </>
  );
};
export default Header;
