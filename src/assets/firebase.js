import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCy6ePaFjLqmzJ3Usk7sODzURlQgfrG-MQ",
    authDomain: "portfolio-contact-form-79f48.firebaseapp.com",
    projectId: "portfolio-contact-form-79f48",
    storageBucket: "portfolio-contact-form-79f48.appspot.com",
    messagingSenderId: "215312593089",
    appId: "1:215312593089:web:4b62a3e36f8a8afd142440",
    measurementId: "G-FV5XD0XRJQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
