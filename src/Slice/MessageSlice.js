import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for sending the form data
export const MessageSlice = createAsyncThunk(
    "support/sendSupportMessage",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:5000/api/inquiries", formData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const supportSlice = createSlice({
    name: "support",
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetState: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(MessageSlice.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(MessageSlice.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(MessageSlice.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload || "Something went wrong!";
            });
    },
});

export const { resetState } = supportSlice.actions;
export default supportSlice.reducer;
