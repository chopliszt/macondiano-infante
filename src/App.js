import React from "react";
import "./App.css";
//lo necesario para el enrutamiento
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Category from "./views/Category";
import ItemDetailContainer from "../src/components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../src/components/Cart/Cart";
import NavBar from "./components/NavBar/NavBar";
//para el Context
import { CartProvider } from "../src/components/Context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container App">
          <NavBar
            colorDeNavBar="#e3f2fd"
            navBrandLeft="Compra tu Hogar/Maloka 🛖"
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
