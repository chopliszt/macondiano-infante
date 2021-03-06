//Paso 1 importar las librerias del context
import React, { createContext, useState } from "react";

//Paso 2: crear el Context
export const CartContext = createContext();

const initialState = [
  {
    id: 45454,
    proyecto: "Santana Dos",
    valor: 195000000,
    quantity: 1,
    etapa: "Chapi",
  },
  {
    id: 45458,
    proyecto: "C Montes",
    valor: 600000000,
    quantity: 1,
    etapa: "Remanso",
  },
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
    cantidadComprada > 0
      ? setCartlist([
          {
            id: objetoHogar.id,
            proyecto: objetoHogar.proyecto,
            etapa: objetoHogar.etapa,
            valor: objetoHogar.valor,
            quantity: cantidadComprada, //en futuro habria que hacer quantity+cantidadComprada
          },
          ...cartList,
        ])
      : alert("Debes agregar mínimo 1 hogar");
  }

  //revisa si el hogar que estoy agregando ya estaba en el carrito
  function estaDuplicado(id) {
    const itemsEncontrados = cartList.find((hogar) => hogar.id === id);
    return typeof itemsEncontrados != "undefined" ? true : false;
  }

  //esta funcion elimina un hogar especifico del carrito
  function eliminarHogar(productID) {
    setCartlist(cartList.filter((item) => item.id !== productID));
    console.log(`El item ${productID} ha sido borrado`);
  }

  //borra el carrito totalmente
  function borrarCarrito() {
    setCartlist([]);
  }

  //suma el total del valor de las compras
  function calcularTotal() {
    let total = 0;
    cartList.map((hogar) => {
      // total += hogar.valor;
      total = total + hogar.valor * hogar.quantity;
    });
    return total;
  }

  //Value, son los valores que queremos que se usen a lo largo de la app
  return (
    <CartContext.Provider
      value={{
        saludar,
        cartList,
        agregarHogar,
        estaDuplicado,
        eliminarHogar,
        borrarCarrito,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
