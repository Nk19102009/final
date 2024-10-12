// register.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Get the form element
const signUpForm = document.getElementById('sign-up');

// Add an event listener to the form for submission
signUpForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get input values
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validation for matching passwords
  if (password !== confirmPassword) {
    document.getElementById('confirm-password-error').innerText = "Passwords do not match.";
    return;
  }

  console.log(email, password)
  // Clear any previous error messages
  document.getElementById('confirm-password-error').innerText = "";

  // Sign up the user using Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('User created: ' + user.email);
      window.location.href = "taikhoan1.html"; // Redirect to sign-in page after registration
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('error-message').innerText = errorMessage;
    });
});