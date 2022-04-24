import "./style/main.css"
import './App.css';
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ProductDetail from "./components/ProductDetail";
import { apiBaseUrl } from "./api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(apiBaseUrl + "/products")
      .then((response) => response.json())
      .then(productsArr => setProducts(productsArr))
    console.log(products)
  }, [])


  return (
    <div className="App">
      <h3>test - APP.js</h3>
      {console.log(products)}
      <ProductList products={products} setProducts={setProducts} />



    </div>
  );
}

export default App;
