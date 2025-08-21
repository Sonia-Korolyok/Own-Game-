
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ScoreStateInterface} from "../utils/types.ts";
import { doc, updateDoc} from "firebase/firestore";
import { db } from "../data/firestore.ts";

const initialState: ScoreStateInterface = {
    scores: {
        score: 0
    }
}

interface ScoreWithId {
    price: number,
    oldScore: number,
    id: string
}

export const fetchScoreUpdateDB = createAsyncThunk(
    'user/fetchScoreUpdateDB',
    async ({price, oldScore, id}: ScoreWithId) => {
        const userRef =  doc(db, "users", id);
        if (isNaN(oldScore)) {
            oldScore = 0;
        }
        const newScore = oldScore + price;
        await updateDoc(userRef, {score: newScore});
        return newScore;
    }
);

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchScoreUpdateDB.pending, (state) => {
                state.scores = {score: NaN};
            })
        .addCase(fetchScoreUpdateDB.fulfilled, (state, {payload}) => {
            state.scores = {score: payload};
        })
            .addCase(fetchScoreUpdateDB.rejected, () => {
                console.log("Error fetching score update");
            })
    }
})


export default scoreSlice.reducer;
