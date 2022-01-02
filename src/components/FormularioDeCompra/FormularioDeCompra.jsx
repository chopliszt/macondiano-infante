import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/FirebaseConfig";
import Swal from "sweetalert2";

const FormularioDeCompra = ({ resetear }) => {
  const [IDDeCompra, setIDDeCompra] = useState();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "ordenes"), {
      nombre: "Juan3",
      correo: "parrot@parrot.com",
      telefono: 3777777,
    });
    setIDDeCompra(docRef.id);
    Swal.fire("Orden creada con el ID: ", docRef.id);
    resetear();
  };

  return (
    <div className="container">
      <div className="row mt-3 bg-info">
        {/* <!-- le doy col-6 xq mas adelante agrego otra al lado de ella --> */}
        <div className="col-6">
          {!IDDeCompra && (
            <form action="" onSubmit={onSubmitHandler}>
              <div className="mb-2">
                {/* <!-- CAMPO DE NOMBRE --> */}
                <label for="nombre" class="form-label">
                  Nombre
                </label>
                {/* <!-- class form-control hace que el label aparezca encima del input --> */}
                <input
                  className="form-control"
                  type="text"
                  id="nombre"
                  placeholder="John"
                />
              </div>
              <div className="mb-2">
                {/* <!-- CAMPO DE CORREO --> */}
                <label for="correo" className="form-label">
                  Correo
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="correo"
                  placeholder="John@now.com"
                  aria-describedby="ayuda-correo"
                />
                <div className="form-text" id="ayuda-correo">
                  Te enviaremos una confirmación
                </div>
              </div>
              <div className="mb-2">
                {/* <!-- CAMPO DE telefono --> */}
                <label for="tel" className="form-label">
                  Telefono
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="tel"
                  placeholder="3002627"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormularioDeCompra;
