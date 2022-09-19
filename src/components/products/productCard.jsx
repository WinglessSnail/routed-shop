import { Link } from "react-router-dom";
import "../../styles/productCard.css";

export const ProductCard = (props) => {
  const { product } = props;

  const handleFave = () => {
    props.dispatch({ type: "toggleFavorite", productId: product.id });
  };

  return (
    <>
      <div className="pcard">
        <div className="imgBx">
          <Link to={`${product.id}`} key={product.id}>
            <img alt="" src={product.img} />
          </Link>
        </div>
        <div className="contentBx">
          <div className="favorite">
            {product.favestate ? (
              <i className="fa fa-heart" onClick={handleFave} />
            ) : (
              <i className="fa fa-heart-o" onClick={handleFave} />
            )}
          </div>
          <h2>{product.title}</h2>
          <Link to={`${product.id}`} key={product.id}>
            <button>Buy Now</button>
          </Link>
          <h5 className="price">{`$${product.price * (1 - product.off)}`}</h5>
          <h5 className="price old">{`$${product.price}`}</h5>
          {/* {props.dispatch({type : "pricing" , data : product})} */}
        </div>
      </div>
    </>
  );
};
