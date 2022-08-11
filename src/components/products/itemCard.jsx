import { useNavigate } from "react-router-dom";
import "../../styles/itemCard.css";

const ItemCard = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card-head">
          <button
            className="backBtn fa fa-arrow-left"
            onClick={() => navigate("/products")}
          ></button>
          <h3 className="promo">air jordan</h3>
        </div>
        <div className="card-body">
          <div className="left">
            <h1 className="card-title"></h1>
            <img src="" />
          </div>
          <div className="right">
            <div className="card-text">
              <p className="discription"></p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="orderBtn">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
