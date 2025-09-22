import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDGEpvdlVxn5rycWnPKRLhUpYNwHKBJWPs",
    authDomain: "own-game-test.firebaseapp.com",
    projectId: "own-game-test",
    storageBucket: "own-game-test.firebasestorage.app",
    messagingSenderId: "374395927592",
    appId: "1:374395927592:web:be0b294be29e486b62891d",
    measurementId: "G-Q34S6F2B6E"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);