// src/redux/formSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { hideToast, showToast } from './common/toast-slice';
import { fetchUserinfo, insertUserInfo } from '@/services/supabaseService';
export const initInsertUserinfo = createAsyncThunk('insertUserinfo', async (params, { rejectWithValue, dispatch }) => {
  dispatch(hideToast())
  try {
    let response;
    response = await insertUserInfo(params);
    console.log("response.data", response.data)
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data.message || 'agents submit failed';
    dispatch(showToast({ message: errorMessage, type: 'error' }));
    return rejectWithValue(error.response.data);
  }
});
export const initFetchUserinfo = createAsyncThunk('initFetchUserinfo', async (params, { rejectWithValue, dispatch }) => {
  dispatch(hideToast())
  try {
    let response;
    response = await fetchUserinfo(params);
    return response.data;
  } catch (error) {
    const errorMessage = error.response.data.message || 'agents submit failed';
    dispatch(showToast({ message: errorMessage, type: 'error' }));
    return rejectWithValue(error.response.data);
  }
});
const initialState = {
  form_values: {
    age: '',
    gender: '',
    height: '',
    weight: '',
    occupationType: '',
    physicalActivity: '',
    fitnessGoals: [],
  },
  // Array to store multiple fitness goals
  loading: false,
  error: null,
  status: false,
  data: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      if (name === 'fitnessGoals') {
        if (state.form_values.fitnessGoals.includes(value)) {
          state.form_values.fitnessGoals = state.form_values.fitnessGoals.filter(goal => goal !== value);
        } else {
          state.form_values.fitnessGoals.push(value);
        }
      } else {
        state.form_values[name] = value;
      }
    },
    resetForm: () => initialState,
  }, extraReducers: (builder) => {
    builder
      .addCase(initInsertUserinfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = false;
        state.data = [];
      })
      .addCase(initInsertUserinfo.fulfilled, (state, action) => {
        state.loading = false;
        // state.status = action.payload.status;
        state.form_values = action.payload;
      })
      .addCase(initInsertUserinfo.rejected, (state) => {
        state.loading = false;
        state.form_values = {}
      })
      .addCase(initFetchUserinfo.fulfilled, (state, action) => {
        state.form_values = action.payload;
      })

  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
