import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD0J6T43PLdDaL2AG56ePG7RUymiH4VgkM",
    authDomain: "java61-a764a.firebaseapp.com",
    projectId: "java61-a764a",
    storageBucket: "java61-a764a.firebasestorage.app",
    messagingSenderId: "86762858376",
    appId: "1:86762858376:web:9e1e2619c62b0faff93c3d",
    measurementId: "G-YDLRFMJVYH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);