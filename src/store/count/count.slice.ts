import {createSlice} from "@reduxjs/toolkit";

interface CountState {
    value: number
}

const initialState:CountState = {
    value: 0
}

export const countSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: state =>  {
            state.value = state.value + 1
        },
        decrement: state =>  {
            state.value = state.value - 1
        }
    }
})

