import { useState } from "react";
import Product from "../components/Product";

function Home() {
  const products = ['Apple', 'Banana', 'Tea', 'Coffee'];
  const [count, setCount] = useState(0);

  const productToggle = (isAdded) => {
    setCount(prev => isAdded ? prev + 1 : prev - 1);
  };

  return (
    <div className="">
      <h1>Home Page</h1>
      <div>
        <h3>Shopping List:</h3>
        {
        products.map((name) => (
          <Product
            key={name}
            name={name}
            onToggle={productToggle}
          />
        ))
        }
        <hr />
        <p>Total Completed: {count}</p>
      </div>
    </div>
  );
}
export default Home;

