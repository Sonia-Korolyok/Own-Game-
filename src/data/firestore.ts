import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhkCwtldsivJi_GzOgczTftd6y_ckyxLU",
  authDomain: "own-game-newtest.firebaseapp.com",
  projectId: "own-game-newtest",
  storageBucket: "own-game-newtest.firebasestorage.app",
  messagingSenderId: "519682722417",
  appId: "1:519682722417:web:919b0a26566989b32b29d0",
  measurementId: "G-V5D67T0KYD"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);