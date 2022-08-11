import { useNavigate } from "react-router-dom";
import "../../styles/productCard.css";

export const ProductCard = (props) => {
  const { product } = props;
  const navigate = useNavigate();

  return (
    <>
        <div className="pcard">
          <div className="imgBx">
            <img src={product.img} onClick={() => navigate(":productId")}/>
          </div>
          <div class="contentBx">
            <h2>{product.title}</h2>
            <button onClick={() => navigate(":productId")}>Buy Now</button>
            <h5>{product.price}</h5>
          </div>
        </div>
    </>
  );
};
