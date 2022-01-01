import React, { useState, useEffect } from "react";
import { db } from "../../services/FirebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ categoriaProp }) {
  const [hogares, setHogares] = useState([]);
  console.log(categoriaProp, "catProp");

  useEffect(() => {
    getAptos();
  }, [categoriaProp]); //para que se actualice cada vez que la categoria cambie

  const getAptos = async () => {
    console.log("Trayendo los datos");
    const q = categoriaProp
      ? query(
          collection(db, "apartamentos"),
          where("categoria", "==", categoriaProp)
        )
      : query(collection(db, "apartamentos"));
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
    <>
      <ItemList hogares={hogares} />
    </>
  );
}

export default ItemListContainer;
