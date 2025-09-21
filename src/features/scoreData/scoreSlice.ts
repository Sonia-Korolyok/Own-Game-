import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ScoreStateInterface} from "../../utils/types.ts";
import {doc, runTransaction} from "firebase/firestore";
import {db} from "../../data/firestore.ts";

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
    "user/fetchScoreUpdateDB",
    async ({price, id}: ScoreWithId) => {
        const userRef = doc(db, 'users', id);
        const newScore = await runTransaction(db, async (transaction) => {
            const snapshot = await transaction.get(userRef);
            if (!snapshot.exists()) {
                throw new Error('User not found');
            }
            const current = (snapshot.data()?.score ?? 0) as number;
            const updated = current + price;
            transaction.update(userRef, { score: updated });
            return updated;
        });
        return newScore;
    }
);


const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        changeScore: (state: ScoreStateInterface, action: PayloadAction<number>) => {
            state.scores.score = action.payload
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
                console.log("Error!")
            })
    }
})
export const {changeScore} = scoreSlice.actions;
export default scoreSlice.reducer;