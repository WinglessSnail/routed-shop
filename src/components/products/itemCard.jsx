import React, { useEffect, useState } from 'react';
import "../../styles/itemCard.css";
import { useNavigate, useParams } from 'react-router-dom';

const ItemCard = () => {
  const navigate = useNavigate();


  let params = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setProduct(result.find((p) => p.id == params.productId));
        },
        (error) => {
          alert("product not found");
        }
      );
  }, []);

  if (!product) return null;

    return (
    <>
      <div className="card">
        <div className="card-head">
          <button
            className="backBtn fa fa-arrow-left"
            onClick={() => navigate(-1)}
          ></button>
          <h3 className="promo">air jordan</h3>
        </div>
        <div className="card-body">
          <div className="left">
            <h1 className="card-title">{product.title}</h1>
            <img src={`../${product.img}`} />
          </div>
          <div className="right">
            <div className="card-text">
              <p className="description">{product.description}</p>
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
