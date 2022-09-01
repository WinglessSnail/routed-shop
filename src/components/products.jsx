import { Outlet } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { ProductCard } from "./products/productCard";
import { useRef } from "react";
import Header from "./header";
import Sale from "./products/sale";
import "../styles/products.css";

const Products = (props) => {
  const [name] = useState(props.userName);
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  const priceFilter = useRef();
  // const [product, dispatch] = useReducer(filter, []);

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
                product.title.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
            );
            setproducts(searchResult);
          }
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [search]);

  // const filter = (product, action) => {
  //   switch (action.type) {
  //     case "ascending":
  //       return (
  //         product.sort((a, b) => a.price - b.price) && setproducts(product)
  //       );
  //     case "descending":
  //       return (
  //         product.sort((a, b) => b.price - a.price) && setproducts(product)
  //       );
  //     default:
  //       return product;
  //   }
  // };

  const handleClick = () => {
    console.log(priceFilter.current.value)
  }

  return (
    <>
      <Sale />
      <Header name={name} setSearch={setSearch} />
      <form className="filter-form">
        <label for="filter" className="filter-label">
          Price filters :{" "}
        </label>
        <select
          name="filter"
          id="filter"
          ref={priceFilter}
          onChange={handleClick}
        >
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </form>
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
