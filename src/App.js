import React, { useState, useEffect } from "react";
import "./App.css";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
