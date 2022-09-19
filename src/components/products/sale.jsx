import React, { useRef } from "react";
import "../../styles/sale.css";

const Sale = () => {
  const close = useRef();

  const handleClose = () => {
    close.current.classList.add("close");
  };
  return (
    <div className="sale-body" ref={close}>
      <span className="sale-text">
        20% off! special end of the summer campaign. 
      </span>
      <button className="sale-btn" onClick={handleClose}>
        <i className="fa fa-times-circle-o"></i>
      </button>
    </div>
  );
};

export default Sale;
