import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserInfo, UserStateInterface} from "../utils/types.ts";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../data/firestore.ts";

const initialState: UserStateInterface = {
    id: '',
    user: {
        login: '',
        password: '',
    }
}

export const fetchUserSaveInDB = createAsyncThunk(
    'user/fetchUserSaveInDB',
    async ({login, password}: UserInfo) => {
        const response = await addDoc(collection(db, "users"), {
            login,
            password,
            score: 0,
            createdAt: new Date(),
        });
        if (!response) {
            throw new Error("Error adding user to Firestore");
        }
        return {
            id: response.id,
            login,
        };
    }
);


const userDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<string>) {
            state.user.login = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserSaveInDB.pending, (state) => {
                state.id = "Pending..."
                console.log("Pending...");
            })
            .addCase(fetchUserSaveInDB.fulfilled, (state, action) => {
                // state.user = action.payload.user;
                state.id = action.payload.id;
                state.user.login = action.payload.login
                localStorage.setItem("userId", (action.payload.id));
            })
            .addCase(fetchUserSaveInDB.rejected, (state, action) => {
                state.id = action.payload+"" || "Error";
                console.log(action.payload);
            })

    }
})

export const {changeLogin} = userDataSlice.actions;
export default userDataSlice.reducer;
