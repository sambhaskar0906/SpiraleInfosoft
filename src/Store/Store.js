import { configureStore } from "@reduxjs/toolkit";
import supportReducer from "../Slice/MessageSlice";
import applyReducer from "../Slice/applySlice";

export const store = configureStore({
    reducer: {
        support: supportReducer,
        apply: applyReducer,
    },
});