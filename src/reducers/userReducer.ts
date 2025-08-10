import {CHANGE_LOGIN, DECREASE_SCORE, INCREASE_SCORE} from "../actions/userAction.ts";
import type {StateInterface, Action} from "../utils/types.ts";
import {initialState} from "../configureStore/store.ts";

export const userReducer = (state: StateInterface = initialState, action: Action): StateInterface => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state, user: {...state.user, login: action.payload + ""}} as StateInterface;
        case INCREASE_SCORE:
            return {...state, scores: {...state.scores, score: state.scores.score + action.payload}};
        case DECREASE_SCORE:
            return {...state, scores: {...state.scores, score: state.scores.score - action.payload}};
        default:
            return state as StateInterface;
    }
}