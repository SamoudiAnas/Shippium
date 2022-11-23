import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* createSlice: it defines redux logic */
/* PayloadAction: a typescript type that represents the content of the slice action */

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        //increment
        incremented(state) {
            state.value++;
        },

        //decrement
        decremented(state) {
            state.value--;
        },

        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },

        //reset
        reset(state) {
            state.value = 0;
        },
    },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
