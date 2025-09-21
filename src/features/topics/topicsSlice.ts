import {createAsyncThunk, createSlice, type ActionReducerMapBuilder, type PayloadAction} from "@reduxjs/toolkit";
import {collection, doc, getDocs, setDoc, type QueryDocumentSnapshot} from "firebase/firestore";
import {db} from "../../data/firestore.ts";
import type {Topic} from "../../utils/types";
import {topics as seedTopicsData} from "../../data/questions.ts";

interface TopicsState {
    topics: Topic[];
    // Для каждого топика и цены храним индекс выбранного вопроса в исходном массиве
    selectedIndexByTitleAndPrice: Record<string, Record<number, number>>;
    // Статус ответа по ячейке (correct | wrong)
    answeredStatusByTitleAndPrice: Record<string, Record<number, 'correct' | 'wrong'>>;
}

const initialState: TopicsState = {
    topics: [],
    selectedIndexByTitleAndPrice: {},
    answeredStatusByTitleAndPrice: {},
}

export const fetchTopics = createAsyncThunk< Topic[] >(
    "topics/fetchTopics",
    async () => {
        const querySnapshot = await getDocs(collection(db, "topics"));
        const result: Topic[] = [];
        querySnapshot.forEach((docSnap: QueryDocumentSnapshot) => {
            const data = docSnap.data() as Topic;
            result.push({ title: data.title, questions: data.questions });
        });
        return result;
    }
);

export const seedTopics = createAsyncThunk(
    "topics/seedTopics",
    async (): Promise<void> => {
        // Пишем каждый топик под id равным title, чтобы не дублировать
        const ops = seedTopicsData.map((t) => setDoc(doc(db, "topics", t.title), t));
        await Promise.all(ops);
    }
);

const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers: {
        initializeBoard(state, action: PayloadAction<Topic[] | undefined>) {
            const topics = action.payload ?? state.topics;
            const prices = [100, 200, 300, 400, 500];
            const selected: Record<string, Record<number, number>> = {};
            topics.forEach((t) => {
                const byPrice: Record<number, number[]> = {};
                t.questions.forEach((q, idx) => {
                    if (!byPrice[q.price]) byPrice[q.price] = [];
                    byPrice[q.price].push(idx);
                });
                selected[t.title] = {};
                prices.forEach((p) => {
                    const ids = byPrice[p] || [];
                    if (ids.length > 0) {
                        const rand = Math.floor(Math.random() * ids.length);
                        selected[t.title][p] = ids[rand];
                    }
                });
            });
            state.selectedIndexByTitleAndPrice = selected;
            state.answeredStatusByTitleAndPrice = {};
        },
        markAnswered(state, action: PayloadAction<{ title: string; price: number; result: 'correct' | 'wrong' }>) {
            const {title, price, result} = action.payload;
            if (!state.answeredStatusByTitleAndPrice[title]) {
                state.answeredStatusByTitleAndPrice[title] = {} as Record<number, 'correct' | 'wrong'>;
            }
            state.answeredStatusByTitleAndPrice[title][price] = result;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<TopicsState>) => {
        builder
            .addCase(fetchTopics.fulfilled, (state: TopicsState, {payload}: PayloadAction<Topic[]>) => {
                state.topics = payload as Topic[];
            });
    }
});

export const { initializeBoard, markAnswered } = topicsSlice.actions;
export default topicsSlice.reducer;

