import React from "react";

const Product = (props) => {
  const { category, name, price, className } = props;
  return (
    <div className={className}>
      <p>{category}</p>
      <h3>{name}</h3>
      <div className="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</div>
      <h5>{price}</h5>
    </div>
  );
};

export default Product;
