import { Outlet } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Header from "./header";
import { ProductCard } from "./products/productCard";
import Sale from "./products/sale";

const Products = (props) => {
  const [name] = useState(props.userName);
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          if (search === "") {
            setproducts(result);
          } else {
            const searchResult = result.filter(
              (product) =>
                product.title.includes(search) ||
                product.description.includes(search)
            );
            setproducts(searchResult);
          }
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [search]);

  return (
    <>
      <Sale/>
      <Header name={name} setSearch={setSearch} />

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Products;
