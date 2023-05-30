import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

const Product = ({ category, name, price, className }) => {
  const [rate, setRate] = useState(0);

  return (
    <div className={className}>
      <p>{category}</p>
      <h3>{name}</h3>
      <div className="stars">
        {rate >= 1 ? (
          <FaStar
            style={{ color: "gold" }}
            onClick={() => setRate((prevRate) => (prevRate === 1 ? 0 : 1))}
          />
        ) : (
          <FaRegStar onClick={() => setRate(1)} />
        )}
        {rate >= 2 ? (
          <FaStar
            style={{ color: "gold" }}
            onClick={() => setRate((prevRate) => (prevRate === 2 ? 0 : 2))}
          />
        ) : (
          <FaRegStar onClick={() => setRate(2)} />
        )}
        {rate >= 3 ? (
          <FaStar
            style={{ color: "gold" }}
            onClick={() => setRate((prevRate) => (prevRate === 3 ? 0 : 3))}
          />
        ) : (
          <FaRegStar onClick={() => setRate(3)} />
        )}
        {rate >= 4 ? (
          <FaStar
            style={{ color: "gold" }}
            onClick={() => setRate((prevRate) => (prevRate === 4 ? 0 : 4))}
          />
        ) : (
          <FaRegStar onClick={() => setRate(4)} />
        )}
        {rate >= 5 ? (
          <FaStar
            style={{ color: "gold" }}
            onClick={() => setRate((prevRate) => (prevRate === 5 ? 0 : 5))}
          />
        ) : (
          <FaRegStar onClick={() => setRate(5)} />
        )}
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export default Product;
