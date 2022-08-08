import Header from "./header";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Products;
