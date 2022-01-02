import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import FormularioDeCompra from "../FormularioDeCompra/FormularioDeCompra";

const Cart = () => {
  const { cartList, eliminarHogar, borrarCarrito, calcularTotal } =
    useContext(CartContext);
  const resetear = () => {
    borrarCarrito();
  };

  return (
    <div>
      {cartList.length === 0 && (
        <>
          <p>No tienes ningún hogar en tu carrito</p>
          <Link to="/">Clic para comprar</Link>
        </>
      )}
      {cartList.length > 0 && (
        <div className="row mt-3 ms-1">
          <div className="row">
            <div className="col">
              <div className="table-responsive">
                <table className="table mt-3">
                  <caption>
                    Tabla de excelentes compras que has hecho, eres brillante
                  </caption>
                  <thead className="table-light">
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                  </thead>
                  <tbody>
                    {/* El index lo usare para saber que tabla coloreo */}
                    {cartList.map((apartamento, index) => {
                      return (
                        <>
                          <tr
                            key={apartamento.id}
                            className={
                              index % 2 === 0 ? "table-primary" : "table"
                            }
                          >
                            <td>{apartamento.proyecto}</td>
                            <td>{apartamento.valor}</td>
                            <td>{apartamento.quantity}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => {
                                  eliminarHogar(apartamento.id);
                                  console.log(
                                    "Eliminando el articulo: ",
                                    apartamento.id
                                  );
                                }}
                              >
                                borrar
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>
                <strong>TOTAL: {calcularTotal()}</strong>
              </p>
              <button
                className="btn btn-info me-1"
                onClick={() => {
                  borrarCarrito();
                }}
              >
                Borrar todo carritoo
              </button>
              <Link to="/">
                <button className="btn btn-primary me-1">regresar</button>
              </Link>
            </div>
          </div>
          <FormularioDeCompra resetear={resetear} />
        </div>
      )}
    </div>
  );
};

export default Cart;
