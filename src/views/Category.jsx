import React from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const params = useParams();
  const categoriaParametro = params.category; //porque recibe el nombre que haya desde rutas de app.js
  console.log("categoria desde la vista2:" + params.category);
  return (
    <div>
      <h4>Category: {categoriaParametro}</h4>
      <ItemListContainer categoriaProp={categoriaParametro} />
    </div>
  );
};

export default Category;
