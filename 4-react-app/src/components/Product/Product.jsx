import "./Product.css";

const Product = ({ images, title, price, category }) => {
  return (
    <div className="prod-card">
      <img src={images[0]} alt="" className="prod-img" />
      <h3 className="card-heading">{title}</h3>
      <p>{price}€</p>
      <p>Category: {category}</p>
    </div>
  );
};

export default Product;
