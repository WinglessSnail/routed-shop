import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import { ProductCard } from "./products/productCard";

const Products = (props) => {
  const [name, setName] = useState(props.userName);
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setproducts(result);
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [props.search]);

  return (
    <>
      <Header name={name} />
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Products;
