import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Sign-Up Logic
document.getElementById("signup-btn")?.addEventListener("click", () => {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Sign-up successful!");
            window.location.href = "index.html"; // Redirect to login
        })
        .catch(error => alert(error.message));
});

// Login Logic
document.getElementById("login-btn")?.addEventListener("click", () => {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            localStorage.setItem("user", email); // Save session
            window.location.href = "dashboard.html"; // Redirect to Dashboard
        })
        .catch(error => alert(error.message));
});

// Logout Logic (Inside Dashboard)
document.getElementById("logout-btn")?.addEventListener("click", () => {
    signOut(auth).then(() => {
        localStorage.removeItem("user");
        window.location.href = "index.html"; // Redirect to login
    }).catch(error => alert(error.message));
});