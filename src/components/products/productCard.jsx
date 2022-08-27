import { useNavigate } from "react-router-dom";
import "../../styles/productCard.css";

export const ProductCard = (props) => {
  const { product } = props;

  const handleClick = () => {
    // navigate(":productId")
    // props.setToggle(false)
    // props.setId(product.id)
    // console.log("product id set to :",product.id);
  };

  return (
    <>
      <div className="pcard">
        <div className="imgBx">
          <img src={product.img} onClick={handleClick} />
        </div>
        <div class="contentBx">
        <div className="favorite">
          <a href="#">
            <i className="fa fa-heart-o" />
          </a>
        </div>
          <h2>{product.title}</h2>
          <button onClick={handleClick}>Buy Now</button>
          <h5>{product.price}</h5>
        </div>
      </div>
    </>
  );
};
