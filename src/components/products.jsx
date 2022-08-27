import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import { ProductCard } from "./products/productCard";
import ItemCard from "./products/itemCard";

const Products = (props) => {
  const [name, setName] = useState(props.userName);
  const [products, setproducts] = useState([]);
  const [search, setSearch] = useState("");
  // const [id, setId] = useState(null);
  // const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          if (search === "") {
            setproducts(result);
          } else {
            const searchResult = result.filter((product) =>
              product.title.includes(search) || product.description.includes(search)
            );
            setproducts(searchResult)
          }
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [search]);

  return (
    <>
      <Header name={name} setSearch={setSearch} />

      <div className="grid">
        {products.map((product) => (
          <Link to={`${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Products;
// {toggle ? (
//   <>
//     <div className="grid">
//       {products.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//           setId={setId}
//           setToggle={setToggle}
//         />
//       ))}
//     </div>
//   </>
// ) : (
//   <>
//     {products.map((product) => (
//       <ItemCard products={product} key={id} setToggle={setToggle} />
//     ))}
//   </>
// )}
// <Outlet />
// </>
