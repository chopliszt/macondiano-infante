import React, { useState, useEffect } from "react";
import { db } from "../../services/FirebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

function ItemListContainer() {
  const [hogares, setHogares] = useState([]);

  useEffect(() => {
    getAptos();
  }, []);

  const getAptos = async () => {
    console.log("Trayendo los datos");
    const q = query(collection(db, "apartamentos"));
    const misDocumentos = []; //creo esta variable para luego sumarle a los datos, el ID
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      misDocumentos.push({ ...doc.data(), id: doc.id }); //para que tengan el id
    });
    setHogares(misDocumentos);
    console.log(misDocumentos);
    console.log("la cantidad de documentos es ", +misDocumentos.length);
  };

  return (
    <div className="App">
      <div className="container">
        <p>hola desde app.js</p>
        {console.log("hola")}
        {hogares &&
          hogares.map((hogar, index) => {
            return <h1 key={index}>{hogar.proyecto}</h1>;
          })}
      </div>
    </div>
  );
}

export default ItemListContainer;
