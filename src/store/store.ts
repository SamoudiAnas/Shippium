import { configureStore } from "@reduxjs/toolkit";

//slices
import counterSlice from "../features/counter/counter-slice";
import rightbarSlice from "../features/rightbar/rightbar-slice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        rightbar: rightbarSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
