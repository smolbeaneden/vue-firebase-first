// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJpA0XbWrYnCA_E_J9tnPN9oH0H8E12hk",
    authDomain: "landing-page-a6a08.firebaseapp.com",
    projectId: "landing-page-a6a08",
    storageBucket: "landing-page-a6a08.firebasestorage.app",
    messagingSenderId: "200230849264",
    appId: "1:200230849264:web:318f9b925acfb742ddd035",
    measurementId: "G-QE7W9JBH68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);