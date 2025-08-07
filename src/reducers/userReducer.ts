import {CHANGE_LOGIN} from "../actions/userAction.ts";
import type {ActionInterface, StateInterface} from "../utils/types.ts";
import {initialState} from "../configureStore/store.ts";
// const initialState = {
//     user: {
//         login: '',
//         password: ''
//     },
//     scores: {
//         score: 0,
//     }
// };

export const userReducer = (state: StateInterface = initialState, action: ActionInterface) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state,user: {login: action.payload + ""}} as StateInterface;
        default:
            return state as StateInterface;
    }
}