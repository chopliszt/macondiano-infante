import React from "react";
import Item from "../Item/Item";

const ItemList = ({ hogares }) => {
  return (
    <>
      {hogares.map((hogar) => {
        return (
          <>
            <Item
              key={hogar.id}
              id={hogar.id}
              proyecto={hogar.proyecto}
              img={hogar.img}
              valor={hogar.valor}
            />
          </>
        );
      })}
    </>
  );
};

export default ItemList;
