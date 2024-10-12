import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// login.js


// Get the form element
const loginForm = document.getElementById('log-in');

// Add a submit event listener to the form
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form's default submission behavior

    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password)
    // Sign in using Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Welcome back, ' + user.email);
            // Redirect to a home page or dashboard
            window.location.href = "./index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            document.getElementById('error-message').innerText = errorMessage;
        });
});