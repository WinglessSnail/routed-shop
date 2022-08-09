import Header from "./header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Products = props => {
  const [name, setName] = useState(props.userName);

  return (
    <>
      <Header name={name}/>
      <Outlet />
    </>
  );
};

export default Products;
