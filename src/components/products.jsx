import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { ProductCard } from "./products/productCard";
import { useRef } from "react";
import Header from "./header";
import Sale from "./products/sale";
import "../styles/products.css";

const ACTIONS = {
  ASCENDING : "ascending",
  DESCENDING : "descending",
  SET : "set",
  TOGGLE_FAVORITE : "toggleFavorite",
  PRICING : "pricing"
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ASCENDING:
      return [...state.sort((a, b) => a.price - b.price)];
    case ACTIONS.DESCENDING:
      return [...state.sort((a, b) => b.price - a.price)];
    case ACTIONS.SET:
      return action.data;
    case ACTIONS.TOGGLE_FAVORITE:
      return state.map((p) => {
        return p.id === action.productId
          ? { ...p, favestate: !p.favestate }
          : p;
      });
    case ACTIONS.PRICING:
      if (state.off) {
        return (
          <>
            <h5 className="price ">{`$${
              state.price * (1 - state.off)
            }`}</h5>
            <h5 className="price old">{`$${state.price}`}</h5>
          </>
        );
      } else {
        return <h5 className="price">{`$${state.price}`}</h5>;
      }
    default:
      return state;
  }
}

const Products = (props) => {
  const [name] = useState(props.userName);
  const [search, setSearch] = useState("");
  const priceFilter = useRef();
  const [products, dispatch] = useReducer(reducer, []);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          if (search === "") {
            dispatch({ type: "set", data: result });
          } else {
            const searchResult = result.filter(
              (product) =>
                product.title.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search)
            );
            dispatch({ type: "set", data: searchResult });
          }
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [search]);

  const handleClick = () => {
    console.log(priceFilter.current.value);
    dispatch({ type: priceFilter.current.value });
  };

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
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Products;
