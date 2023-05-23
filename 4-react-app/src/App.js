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
      />
    </div>
  );
}

export default App;
