import Product from "./components/Product/Product";

function App() {
  const product = {
    image1:
      "https://cdn.shopify.com/s/files/1/0563/1400/3629/products/2024ExoticCars11.jpg?v=1676036099",
    image2:
      "https://cdn.shopify.com/s/files/1/0563/1400/3629/products/2024ExoticCars1.jpg?v=1676036099",
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
    <div>
      <Product
        image1={product.image1}
        image2={product.image2}
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
  );
}

export default App;
