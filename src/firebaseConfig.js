import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crud-firebase-aff39.firebaseapp.com",
  projectId: "crud-firebase-aff39",
  storageBucket: "crud-firebase-aff39.appspot.com",
  messagingSenderId: "804806239978",
  appId: "1:804806239978:web:c718e30bfbe8ba87bf9993",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
