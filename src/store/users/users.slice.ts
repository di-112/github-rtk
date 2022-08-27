import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/users.models";

interface IState {
    users: IUser[]
}

const initialState: IState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
})
