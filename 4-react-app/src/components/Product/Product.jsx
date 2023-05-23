import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "../Button/Button";
import "./Product.css";

const Product = ({
  image1,
  image2,
  title,
  price,
  description,
  availability,
  category,
  designs,
  limit,
  sizes,
  dimensions,
}) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < availability) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card">
      <div className="left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
      </div>
      <div className="right">
        <div className="card-heading ">
          <div>
            <h3>{title}</h3>
            <h3>2022 Calendar</h3>
          </div>
          <div className="arrow-icons">
            <p className="arrow-icon">
              <AiOutlineLeft />
            </p>
            <p className="arrow-icon">
              <AiOutlineRight />
            </p>
          </div>
        </div>
        <p className="price">{price.toFixed(2)}€</p>
        <p>{designs}</p>
        <p>{description}</p>
        <p>{limit}</p>
        <p>{sizes}</p>
        <p>{dimensions}</p>
        <h4>
          Availability: <span>{availability} in stock</span>
        </h4>
        <div className="btn-group">
          <button className="btn-count" onClick={decrease}>
            -
          </button>
          <p className="count">{count}</p>
          <button className="btn-count" onClick={increase}>
            +
          </button>
          <Button title="ADD TO CART" />
        </div>
        <p className="card-footer">Category: {category}</p>
      </div>
    </div>
  );
};

export default Product;
