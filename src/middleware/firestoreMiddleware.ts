import { collection, addDoc } from "firebase/firestore";
import {db} from "../data/firestore.ts"

export const firestoreMiddleware = (store: any) => (next: any) => async (action: any) => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            login: action.payload,
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return next(action);
}