import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {userReducer} from "../reducers/userReducer.ts";
import type {StateInterface} from "../utils/types.ts";
import {firestoreMiddleware} from "../middleware/firestoreMiddleware.ts";


// const enhancer = import.meta.env.DEV ? composeWithDevTools() : undefined;

export const initialState: StateInterface = {
    user: {
        login: "name",
        password: "",
    },
    scores: {
        score: 0,
    }
}

export const store = createStore(userReducer, initialState,
    applyMiddleware(firestoreMiddleware));