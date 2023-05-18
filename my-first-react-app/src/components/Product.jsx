import React from "react";
import PropTypes from "prop-types";

const Product = ({ category, name, price, className }) => {
  return (
    <div className={className}>
      <p>{category}</p>
      <h3>{name}</h3>
      <div className="stars">&#9734;&#9734;&#9734;&#9734;&#9734;</div>
      <h5>{price}</h5>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default Product;
