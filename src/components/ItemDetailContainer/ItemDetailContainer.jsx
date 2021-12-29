import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/FirebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [hogarData, setHogarData] = useState([]);
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    console.log("hola desde el useEffect");
    getAptos();
  }, [params]); //para que se renderice cada vez que cambie params

  const getAptos = async () => {
    console.log("Trayendo los datos");
    const q = query(
      collection(db, "apartamentos"),
      where(documentId(), "==", params.id)
    );

    const misDocumentos = []; //creo esta variable para luego sumarle a los datos, el ID
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      misDocumentos.push({ ...doc.data(), id: doc.id }); //para que tengan el id
    });
    setHogarData(misDocumentos);
    console.log(misDocumentos);
    console.log("la cantidad de documentos es ", +misDocumentos.length);
  };

  return (
    <div>
      <h3>Este es el hogar que elegiste</h3>
      {hogarData.map((hogar) => {
        return <ItemDetail data={hogar} key={hogar.id} />;
      })}
      <p>parrafo</p>
    </div>
  );
};

export default ItemDetailContainer;
