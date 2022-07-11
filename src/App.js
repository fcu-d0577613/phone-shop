import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import Product from "./components/products/Product";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/products/:id" element={ <Product /> } />
      </Routes>
    </>
  );
}

export default App;
