import React from "react";
import PropTypes from "prop-types";

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

Product.propTypes = {
  category: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};
export default Product;
