// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4hDYkCge9jYuxum8NLvEGC6dDeXoYnSY",
  authDomain: "assignment-eleven-client-ed14d.firebaseapp.com",
  projectId: "assignment-eleven-client-ed14d",
  storageBucket: "assignment-eleven-client-ed14d.appspot.com",
  messagingSenderId: "414573981462",
  appId: "1:414573981462:web:274f40de45dbf4cb73ea37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;