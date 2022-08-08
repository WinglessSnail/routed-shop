import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <span className="logo">Routed shop</span>
        <ul>
          <li>Products Page</li>
        </ul>
        
        <span className="badge">user's name</span>
        <button className="button">logout</button>
        
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
