import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8gwFoYvOBZ32MUORsrAszEcEbORsKmFI",
    authDomain: "final-test-d784d.firebaseapp.com",
    projectId: "final-test-d784d",
    storageBucket: "final-test-d784d.appspot.com",
    messagingSenderId: "207400173502",
    appId: "1:207400173502:web:2bf0ad41cf0727919ec3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{auth}