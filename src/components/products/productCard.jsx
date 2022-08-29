import { useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/productCard.css";

export const ProductCard = (props) => {
  const { product } = props;
  const [favestate, setFavestate] = useState(false);
  
  const handleFave = () => {
    setFavestate(!favestate);
  };

  
  return (
    <>
      <div className="pcard">
        <div className="imgBx">
          <Link to={`${product.id}`} key={product.id}>
            <img src={product.img} />
          </Link>
        </div>
        <div class="contentBx">
          <div className="favorite">
            {favestate === product.favestate ? (
              <i className="fa fa-heart-o" onClick={handleFave} />
            ) : (
              <i className="fa fa-heart" onClick={handleFave} />
            )}
          </div>
          <h2>{product.title}</h2>
          <Link to={`${product.id}`} key={product.id}>
            <button>Buy Now</button>
          </Link>
          <h5 className="price">{`$${product.price*.8}`}</h5>
          <h5 className="price old">{`$${product.price}`}</h5>
        </div>
      </div>
    </>
  );
};
