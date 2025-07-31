// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwGewpgIfRTTusBxn-YqD4-rr0wmH4Wvo",
  authDomain: "dragon-news-d8abe.firebaseapp.com",
  projectId: "dragon-news-d8abe",
  storageBucket: "dragon-news-d8abe.firebasestorage.app",
  messagingSenderId: "787467365655",
  appId: "1:787467365655:web:58d757e33edc34cacedb52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);