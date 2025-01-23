import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for submitting the application
export const submitApplication = createAsyncThunk(
    'apply/submit',
    async (applicationData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/apply', applicationData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An error occurred');
        }
    }
);

const applySlice = createSlice({
    name: 'apply',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        resetStatus: (state) => {
            state.loading = false;
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitApplication.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(submitApplication.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(submitApplication.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload;
            });
    },
});

export const { resetStatus } = applySlice.actions;
export default applySlice.reducer;
