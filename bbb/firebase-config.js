// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCi716Gp-q0inLNsfTe_GqHOYPJsVG0kuQ",
    authDomain: "fullstack1206.firebaseapp.com",
    projectId: "fullstack1206",
    storageBucket: "fullstack1206.firebasestorage.app",
    messagingSenderId: "32564544992",
    appId: "1:32564544992:web:5609012e41100732eb9785",
    measurementId: "G-9XW17VLP2G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);