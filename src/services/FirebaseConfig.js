// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"; //del firestore! no de ./
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //   apiKey: "AIzaSyB-WoH_TDszsDNujwmTsVjQOAMtLi9Lte0",
  //vamos a ver si funciona todo con variables de entorno ahora
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "compra-tu-apto.firebaseapp.com",
  projectId: "compra-tu-apto",
  storageBucket: "compra-tu-apto.appspot.com",
  messagingSenderId: "232716744536",
  appId: "1:232716744536:web:13d567befb8fc8ee56172d",
  //este se usa para Analytics, pero daba error porque decia que se estaban
  //usando mal los template strings
  //   measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
