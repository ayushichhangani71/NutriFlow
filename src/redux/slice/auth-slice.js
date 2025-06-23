// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        resetForm: () => initialState,
    },
});

export const { setUser, resetForm } = authSlice.actions;
export default authSlice.reducer;
