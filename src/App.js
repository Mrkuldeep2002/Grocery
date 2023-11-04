import React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from 'react-use-cart';
import Home from "./foodmart/section/Home/home";
import About from "./foodmart/section/About/About";
import Cart from "./foodmart/section/cart/cart";
import ProductDetail from "./foodmart/section/Home/productDetails";

function App() {
  return (
    <CartProvider>

    
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/details/:id' element={<ProductDetail/>} />
        
      </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}


export default App