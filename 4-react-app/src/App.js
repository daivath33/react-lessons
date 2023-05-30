import Image1 from "./assets/img1.jpg";
import Image2 from "./assets/img2.jpg";
import Image3 from "./assets/img3.jpg";
import Image4 from "./assets/img4.jpg";
import { products } from "./data.js";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Product from "./components/Product/Product";

console.log(products);
function App() {
  const product = {
    images: [Image1, Image2, Image3, Image4],
    title: "Volkswagen GOLF MK2",
    price: 10,
    availability: 10,
    description: "All pieces are printed on heavyweight 200 gsm art paper.",
    category: "Calendars",
    designs: "12 unique designs",
    limit: "Limited to 50 pieces",
    sizes: "One size:",
    dimensions: "11.7x16.5 inch/(297x420mm)",
  };
  return (
    <>
      <div>
        <Products />
      </div>
      <div>
        <ProductDetails
          images={product.images}
          title={product.title}
          price={product.price}
          availability={product.availability}
          description={product.description}
          category={product.category}
          designs={product.designs}
          limit={product.limit}
          sizes={product.sizes}
          dimensions={product.dimensions}
        />
      </div>
    </>
  );
}

export default App;
