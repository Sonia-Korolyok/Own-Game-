import {combineReducers, configureStore, type UnknownAction} from "@reduxjs/toolkit";
import userDataSlice from "../features/userData/userDataSlice.ts";
import scoreSlice from "../features/scoreData/scoreSlice.ts";
//todo to configure with redux-persist

export const logOutAction = () => ({type:'LOGOUT'})

const appReducer = combineReducers({
    userLayer: userDataSlice,
    score: scoreSlice,
})

// 1. Получаем тип стейта корневого редюсера
type AppState = ReturnType<typeof appReducer>;

// 2. Явно типизируем параметры:
const logOutReducer = (state: AppState | undefined, action: UnknownAction): AppState => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }
    return appReducer(state, action);
};

export const store = configureStore({
    reducer: logOutReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;