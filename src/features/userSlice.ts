
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStateInterface} from "../utils/types.ts";

const initialState: UserStateInterface = {
    id: '',
    user: {
        login: '',
        password: '',
    }
}

const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<string>) {
            state.user.login = action.payload;
        },
        changeId(state, action: PayloadAction<string>) {
            state.id = action.payload;
        }
    }
})

export const {changeLogin, changeId} = userDataSlice.actions;
export default userDataSlice.reducer;
