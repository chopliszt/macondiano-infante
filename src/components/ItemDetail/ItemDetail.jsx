import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";

//DATA es realmente el hogar que viene como prop
const ItemDetail = ({ data }) => {
  const { agregarHogar, estaDuplicado } = useContext(CartContext);

  function onAdd(cantidadDeHogares) {
    estaDuplicado(data.id) === false
      ? agregarHogar(data, cantidadDeHogares)
      : alert("Está repetido!");
  }

  return (
    <>
      <div className="row mt-3">
        <col-12>
          <h2>
            {data ? `${data.proyecto}-${data.etapa}` : "Título de artículo"}
            <span className="badge bg-primary">
              {data ? data.category : null}
            </span>
          </h2>
        </col-12>
      </div>
      <div className="row mt-3">
        <div className="col-xs-12 col-lg-6">
          <img className="img-fluid" src={data ? data.img : null} alt="" />
        </div>
        <div className="col-xs-12 col-lg-6">
          <h4>Descripción</h4>
          <p>{data ? data.descripcion : "Descripción"}</p>
          <p>
            <strong>Categoría: {data ? data.categoria : null}</strong>
          </p>
          <p>
            <strong>
              Precio: US${data ? data.valor : "precio"}
              <span className="badge bg-warning">Entrega Inmediata</span>
            </strong>
          </p>
          <h4>Cantidad a comprar</h4>
          <ItemCount inventario={data.stock} inicial={0} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
