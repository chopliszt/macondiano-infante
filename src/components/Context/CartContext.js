//Paso 1 importar las librerias del context
import React, { createContext, useState } from "react";

//Paso 2: crear el Context
export const CartContext = createContext();

const initialState = [
  { id: 45454, proyecto: "Keyboard Dell", valor: 20 },
  { id: 45458, proyecto: "Mouse Dell", valor: 10 },
  { id: 45459, proyecto: "Samsung Monitor", valor: 300 },
  { id: 45453, proyecto: "MacBook Pro", valor: 860 },
  { id: 45457, proyecto: "Motorola S10", valor: 660 },
];

//Paso 3:crear el componente Provider con {children}
//Value, son los valores que queremos que se usen a lo largo de la app
export const CartProvider = ({ children }) => {
  const [cartList, setCartlist] = useState(initialState);

  //Paso 4: crear las funciones que necesito
  function saludar() {
    alert("Bonjour");
  }

  //Para agregar productos, recibo el objeto
  function agregarhogar(objetoHogar, cantidadComprada) {
    setCartlist([
      {
        id: objetoHogar.id,
        name: objetoHogar.proyecto,
        price: objetoHogar.valor,
        quantity: cantidadComprada,
      },
      ...cartList,
    ]);
    console.log(cartList);
  }

  return (
    <CartContext.Provider value={{ saludar, cartList, agregarhogar }}>
      {children}
    </CartContext.Provider>
  );
};
