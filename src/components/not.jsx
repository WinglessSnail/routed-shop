import { Link } from "react-router-dom";
import "../styles/not.css"

export const Not = () => {
  return (
    <>
      <h1 className="h1">404 product Not found</h1>
      <h6 className="h1 h6">return to <Link to={"/products"}>products</Link></h6>
    </>
  );
};
