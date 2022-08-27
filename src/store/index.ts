import {configureStore} from "@reduxjs/toolkit";
import {countSlice} from "./count/count.slice";
import {usersApi} from "./users/users.api";
import {usersSlice} from "./users/users.slice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [countSlice.name]: countSlice.reducer,
        [usersSlice.name]: usersSlice.reducer,
    }
})

export type RootStore = ReturnType<typeof store.getState>