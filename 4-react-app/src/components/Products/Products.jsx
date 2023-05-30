import Product from "../Product/Product";
import "./Products.css";
import { products } from "./../../data.js";
console.log(products);
const Products = () => {
  return (
    <div>
      <h1 className="prod-heading">Products Page</h1>
      <div className="prod-container">
        {products.map((product) => (
          <Product
            key={product.title}
            product={product.title}
            images={product.images}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
