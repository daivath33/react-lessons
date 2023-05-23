import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./Product.css";
const Product = () => {
  return (
    <div className="card">
      <div className="left">
        <img
          src="https://cdn.shopify.com/s/files/1/0563/1400/3629/products/2024ExoticCars11.jpg?v=1676036099"
          alt=""
        />
        <img
          src="https://cdn.shopify.com/s/files/1/0563/1400/3629/products/2024ExoticCars1.jpg?v=1676036099"
          alt=""
        />
      </div>
      <div className="right">
        <div className="card-heading ">
          <div>
            <h3>Volkswagen GOLF MK2</h3>
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

        <p className="price">10.00€</p>
        <p>12 unique designs</p>
        <p>All pieces are printed on heavyweight 200 gsm art paper.</p>
        <p>Limited to 50pieces</p>
        <p>One size:</p>
        <p>11.7x16.5 inch/(297x20mm)</p>
        <h4>
          Availability: <span>10 in stock</span>
        </h4>
        <div className="btn-group">
          <button className="btn-count">+</button>
          <p className="count">0</p>
          <button className="btn-count">-</button>
          <button className="btncal">ADD TO CART</button>
        </div>
        <p>Category: Calendars</p>
      </div>
    </div>
  );
};

export default Product;
