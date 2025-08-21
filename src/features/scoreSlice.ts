
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ScoreStateInterface} from "../utils/types.ts";

const initialState: ScoreStateInterface = {
    scores: {
        score: 0
    }
}

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        increaseScore: (state, action:PayloadAction<number>) => {
            state.scores.score += action.payload
        },
        decreaseScore: (state, action) => {
            state.scores.score -= action.payload
        }
    }
})

export const {increaseScore, decreaseScore} = scoreSlice.actions;
export default scoreSlice.reducer;
