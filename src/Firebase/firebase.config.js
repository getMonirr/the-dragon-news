// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrY_cC2mGkKPztptkKq6X9Vi3vSgISbSw",
    authDomain: "the-dragon-news-98e38.firebaseapp.com",
    projectId: "the-dragon-news-98e38",
    storageBucket: "the-dragon-news-98e38.appspot.com",
    messagingSenderId: "744867860634",
    appId: "1:744867860634:web:af665e789ff7da0f960f23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;