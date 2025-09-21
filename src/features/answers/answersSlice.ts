import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {AnswerItem} from "../../utils/types";
import {addDoc, collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../../data/firestore";

interface AnswersState {
    items: AnswerItem[];
    loading: boolean;
}

const initialState: AnswersState = {
    items: [],
    loading: false,
}

export const addAnswerToHistory = createAsyncThunk(
    'answers/addAnswerToHistory',
    async ({userId, answer}: { userId: string, answer: AnswerItem }) => {
        const ref = collection(db, 'users', userId, 'answers');
        const docRef = await addDoc(ref, answer);
        return { ...answer, id: docRef.id } as AnswerItem;
    }
);

export const fetchAnswersHistory = createAsyncThunk(
    'answers/fetchAnswersHistory',
    async ({userId}: { userId: string }) => {
        const ref = collection(db, 'users', userId, 'answers');
        const q = query(ref, orderBy('answeredAt', 'desc'));
        const snap = await getDocs(q);
        const result: AnswerItem[] = [];
        snap.forEach(d => {
            const data = d.data() as AnswerItem;
            result.push({ ...data, id: d.id });
        });
        return result;
    }
);

const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addAnswerToHistory.pending, (state) => {
                state.loading = true;
            })
            .addCase(addAnswerToHistory.fulfilled, (state, {payload}: PayloadAction<AnswerItem>) => {
                state.loading = false;
                state.items.unshift(payload);
            })
            .addCase(addAnswerToHistory.rejected, (state) => {
                state.loading = false;
            })
            .addCase(fetchAnswersHistory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAnswersHistory.fulfilled, (state, {payload}: PayloadAction<AnswerItem[]>) => {
                state.loading = false;
                state.items = payload;
            })
            .addCase(fetchAnswersHistory.rejected, (state) => {
                state.loading = false;
            })
    }
});

export default answersSlice.reducer;


