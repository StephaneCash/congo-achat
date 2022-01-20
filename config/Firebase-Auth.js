import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYTJ27jVy2Wg_Gr43AMzo7MNICOcm9YEQ",
    authDomain: "congo-achat-backend.firebaseapp.com",
    projectId: "congo-achat-backend",
    storageBucket: "congo-achat-backend.appspot.com",
    messagingSenderId: "801686891248",
    appId: "1:801686891248:web:82ecca1764c50065fb7035",
    measurementId: "G-SBZT63R7QL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);