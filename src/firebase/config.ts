// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrgJWLWmDBAdIqtarmWpQVGpxKm0sehXE",
  authDomain: "react-cursos-1a93f.firebaseapp.com",
  projectId: "react-cursos-1a93f",
  storageBucket: "react-cursos-1a93f.appspot.com",
  messagingSenderId: "510142049980",
  appId: "1:510142049980:web:4bbcb89fb2e5061f002ab9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );