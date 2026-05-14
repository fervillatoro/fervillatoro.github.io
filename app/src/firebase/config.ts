// firebase-config.ts

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Inicializa Firebase

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1I-bvWg3fijYgZpCKWw-ow_WQ6QbaZUM",
  authDomain: "nicefer-app.firebaseapp.com",
  projectId: "nicefer-app",
  storageBucket: "nicefer-app.firebasestorage.app",
  messagingSenderId: "488381257137",
  appId: "1:488381257137:web:8fd670b21ac74dc8c39990",
  measurementId: "G-CHM4DSN7YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FireConfig = {
  Firestore: getFirestore(app, 'tmp-villatoro'),
};