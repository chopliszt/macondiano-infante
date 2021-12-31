import React, { useState } from "react";
import Alerta from "../Alerta/Alerta";
import { Link } from "react-router-dom";

export default function ItemCount({ inventario, inicial, onAdd }) {
  const [cantidadCompras, setCantidadCompras] = useState(inicial);
  const [hayAlertaDeInventario, setHayAlertaDeInventario] = useState(false);
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  function agregar() {
    const suma = parseInt(cantidadCompras) + 1;
    suma > inventario
      ? setHayAlertaDeInventario(true)
      : setCantidadCompras(parseInt(cantidadCompras) + 1);
  }

  function eliminar() {
    const resta = cantidadCompras - 1;
    resta < 0 ? setCantidadCompras(0) : setCantidadCompras(cantidadCompras - 1);
  }

  //lo que hace cuando uno al final le da a confirmar la compra
  function onConfirmar() {
    alert(cantidadCompras);
    onAdd(cantidadCompras);
    setCantidadCompras(inicial);
    setCompraConfirmada(true);
  }

  return (
    <div className="container">
      <div>
        {hayAlertaDeInventario && <Alerta mensaje="No hay suficiente Stock" />}
      </div>
      <div className="row mb-5 justify-content-center">
        <div className="col ">
          <p>({inventario} hogares disponibles)</p>
          <button className="btn btn-primary me-2" onClick={eliminar}>
            -
          </button>
          <button className="btn btn-primary" onClick={agregar}>
            +
          </button>
        </div>
        <p>Comprando: {cantidadCompras} hogares!</p>
        <div className="col-xs-12 col-lg-6">
          {!compraConfirmada ? (
            <button className="btn btn-info" onClick={onConfirmar}>
              comprar
            </button>
          ) : (
            <>
              <Link to={"/"}>
                <button className="btn btn-info mt-2">seguir comprando</button>
              </Link>
              <Link to={"/cart"}>
                <button className="btn btn-info mt-2">Ir a Carrito</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
