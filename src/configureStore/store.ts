import {legacy_createStore as createStore} from "redux";
import {userReducer} from "../reducers/userReducer.ts";
import type {StateInterface} from "../utils/types.ts";
import {composeWithDevTools} from "@redux-devtools/extension";

const enhancer = import.meta.env.DEV ? composeWithDevTools() : undefined;

export const initialState: StateInterface = {
    user: {
        login: "name",
        password: "",
    },
    scores: {
        score: 0,
    }
}

export const store = createStore(userReducer, initialState, enhancer);