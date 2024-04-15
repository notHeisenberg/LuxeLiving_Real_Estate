// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3694zNenOk3onfcLOnPyyVY_6yb6Scj4",
    authDomain: "real-state-30c8b.firebaseapp.com",
    projectId: "real-state-30c8b",
    storageBucket: "real-state-30c8b.appspot.com",
    messagingSenderId: "339727227760",
    appId: "1:339727227760:web:9f6ba1c51c44bcad724db5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);