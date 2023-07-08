// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA96RtouYomgFfcOnO-r30xSdHOWm1uYaE",
    authDomain: "asperia-2453d.firebaseapp.com",
    projectId: "asperia-2453d",
    storageBucket: "asperia-2453d.appspot.com",
    messagingSenderId: "1040391468706",
    appId: "1:1040391468706:web:a56ed4d30a0b12542c09fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

//making a function for storing data
export function signup(email,password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(function (success) {
            alert("Signup Successfully")
        })
        .catch(function (err) {
            alert("error" + err)
        });
};