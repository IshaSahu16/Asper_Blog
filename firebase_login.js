// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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

// var email = document.getElementById("email");
// var password = document.getElementById("password");
window.login= function(e) {
    e.preventDefault();
    console.log(e.target);
    var email = e.target.querySelector("#email2");
    var password = e.target.querySelector("#password2");
    console.log(email, password);
    var obj = {
    email: email.value,
    password: password.value,
    };

    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
        alert("logged in Successfully")
        var aaaa =  (success.user.uid);
        localStorage.setItem("uid",aaaa)
        console.log(aaaa)
        
        
        
        window.location.replace("index.html")
        // localStorage.setItem(success,user,uid)
        
    })
    .catch(function (err) {
        alert("login error"+err);
    });

    console.log(obj);
    }