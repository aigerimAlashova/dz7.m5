import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCg7_FHuq3GUJzT9yQLuqOHkUhPjDVR9S8",
    authDomain: "fir-5e265.firebaseapp.com",
    projectId: "fir-5e265",
    storageBucket: "fir-5e265.appspot.com",
    messagingSenderId: "67386729304",
    appId: "1:67386729304:web:1cd3f8f466b25cad3ebb2d",
    measurementId: "G-GDXZJTE9D1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 
export const provider = new GoogleAuthProvider(app)