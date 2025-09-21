import {combineReducers, configureStore, type UnknownAction} from "@reduxjs/toolkit";
import userDataSlice from "../features/userData/userDataSlice.ts";
import scoreSlice from "../features/scoreData/scoreSlice.ts";
import topicsReducer from "../features/topics/topicsSlice.ts";
import answersReducer from "../features/answers/answersSlice.ts";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

export const logOutAction = () => ({type: 'LOGOUT'})

const appReducer = combineReducers({
    userLayer: userDataSlice,
    score: scoreSlice,
    topics: topicsReducer,
    answers: answersReducer,
})

// Корневой редюсер с очисткой состояния при LOGOUT
const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: UnknownAction) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userLayer', 'score', 'topics', 'answers'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;