
import {configureStore} from "@reduxjs/toolkit";
import userDataSlice from "../features/userSlice.ts";
import scoreSlice from "../features/scoreSlice.ts";

export const store = configureStore({
    reducer: {
        userLayer: userDataSlice,
        score: scoreSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
