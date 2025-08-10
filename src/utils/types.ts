import type {CHANGE_LOGIN} from "../actions/userAction.ts";

export interface StateInterface {
    user: {
        login: string,
        password: string,
    },
    scores: {
        score: number
    }
}

export interface UserActionInterface {
    type: typeof CHANGE_LOGIN,
    payload: string
}

export interface ScoresActionInterface {
    type: string,
    payload: number
}

export type Action = UserActionInterface | ScoresActionInterface;