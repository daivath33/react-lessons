import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      category: "canvases",
      name: "off-white air jordan 1 canvas",
      price: "16.00€ - 32.00€",
    },
  ];

  return (
    <>
      <h1>Best Sellers</h1>
      <div className="flex-box">
        <Product
          className="product-card"
          category="canvases"
          name="off-white air jordan 1 canvas"
          price="32.00€ - 120.00€"
        />
        <Product
          className="product-card"
          category="posters"
          name="yeezy boost 350 v2 frozen yellow poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="stikers"
          name="yeezy boost 350 v2 zebra"
          price="5.00€"
        />
        <Product
          className="product-card"
          category="adidas"
          name="adidas yeezy powerphse calabasas poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="jordans"
          name="air jordans 4 red suede poster"
          price="16.00€ - 32.00€"
        />
        <Product
          className="product-card"
          category="balenciaga"
          name="balenciaga tripple 5 poster"
          price="16.00€ - 32.00€"
        />
      </div>
    </>
  );
};

export default Products;
