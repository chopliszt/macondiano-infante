import React from "react";
import "./App.css";
//lo necesario para el enrutamiento
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Category from "./views/Category";

function App() {
  return (
    <Router>
      <div className="App container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
