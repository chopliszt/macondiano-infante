//Paso 1 importar las librerias del context
import React, { createContext, useState } from "react";

//Paso 2: crear el Context
export const CartContext = createContext();

const initialState = [
  { id: 45454, proyecto: "Keyboard Dell", valor: 20, quantity: 101 },
  { id: 45458, proyecto: "Mouse Dell", valor: 10, quantity: 101 },
  { id: 45459, proyecto: "Samsung Monitor", valor: 300, quantity: 101 },
  { id: 45453, proyecto: "MacBook Pro", valor: 860, quantity: 101 },
  { id: 45457, proyecto: "Motorola S10", valor: 660, quantity: 101 },
];

//Paso 3:crear el componente Provider con {children}

export const CartProvider = ({ children }) => {
  const [cartList, setCartlist] = useState(initialState);

  //Paso 4: crear las funciones que necesito
  function saludar(mensaje) {
    mensaje ? alert(mensaje) : alert("Bonjour");
  }

  //Para agregar productos, recibo el objeto
  function agregarHogar(objetoHogar, cantidadComprada) {
    setCartlist([
      {
        id: objetoHogar.id,
        proyecto: objetoHogar.proyecto,
        valor: objetoHogar.valor,
        quantity: cantidadComprada, //en futuro habria que hacer quantity+cantidadComprada
      },
      ...cartList,
    ]);
    // console.log(cartList);
  }

  //revisa si lo que estoy agregando al carrito ya estaba
  function estaDuplicado(titulo) {
    const itemsEncontrados = cartList.find(
      (hogar) => hogar.proyecto === titulo
    );
    return typeof itemsEncontrados != "undefined" ? true : false;
  }
  //borra el carrito totalmente
  function borrarCarrito() {
    setCartlist([]);
    console.log("Carrito borrado");
    console.log(cartList);
  }

  //Value, son los valores que queremos que se usen a lo largo de la app
  return (
    <CartContext.Provider
      value={{ saludar, cartList, agregarHogar, estaDuplicado, borrarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};
