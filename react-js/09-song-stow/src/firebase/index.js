// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // import cloud firestore we-module-api

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC24kFFVEW1_-GqIfhiLmRLh_agV1biwX4",
  authDomain: "songstow-97817.firebaseapp.com",
  projectId: "songstow-97817",
  storageBucket:"songstow-97817.appspot.com",
  messagingSenderId: "56332864300",
  appId: "1:56332864300:web:5352a1fe81eb398be5fa89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// console.log(db);