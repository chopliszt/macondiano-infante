import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

//DATA es realmente el hogar que viene como prop
const ItemDetail = ({ data }) => {
  // const [hogar, setHogar] = useState();
  const { saludar, agregarHogar } = useContext(CartContext);

  function onAdd(cantidadDeHogares) {
    console.log("hola desde onAdd");
    agregarHogar(data, cantidadDeHogares);
  }

  return (
    <>
      <div className="row mt-3">
        <col-12>
          <h2>
            {data ? data.proyecto : "Título de artículo"}
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
          {/* <h4>Cantidad comprada temporal {cantidadCompras}</h4> */}
          <ItemCount
            inventario={5}
            inicial={0}
            saludar={saludar}
            onAdd={onAdd}
          />
          <Link to="/cart">
            <button
              className="btn btn-warning me-2"
              onClick={() => {
                //faltaria implementar que lo que compre sea mayor a 0
                // estaDuplicada(product.title) == false
                //   ? agregarProducto(product, cantidadCompras)
                //   : alert("Está repetido!");
              }}
            >
              Compraaar Ir al Carrito! Esta logica aun debo usarla
            </button>
          </Link>
          {/* <button
            className="btn btn-success me-1"
            onClick={() => {
              // borrarCarrito();
              alert("borrando todo el carrito!");
            }}
          >
            Borrar todo
          </button> */}
          {/* <button
            className="btn btn-success me-1"
            onClick={() => {
              alert("eliminando item" + data.id);
              // eliminarItem(product.id);
            }}
          >
            Borrar este producto
          </button> */}

          {/* <Link to="/">
            <button class="btn btn-info">Regresar</button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
