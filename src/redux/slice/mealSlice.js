import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { hideToast, showToast } from './common/toast-slice';
import {  insertMealInfo } from '@/services/mealService';

export const initInsertMealinfo = createAsyncThunk('insertMealinfo', async (params, { rejectWithValue, dispatch }) => {
  dispatch(hideToast());
  try {
    let response = await insertMealInfo(params);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Insert failed';
    dispatch(showToast({ message: errorMessage, type: 'error' }));
    return rejectWithValue(error.response?.data);
  }
});

// export const initFetchMealinfo = createAsyncThunk('initFetchMealinfo', async (params, { rejectWithValue, dispatch }) => {
//   dispatch(hideToast());
//   try {
//     let response = await fetchMealinfo(params);
//     return response.data;
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || 'Fetch failed';
//     dispatch(showToast({ message: errorMessage, type: 'error' }));
//     return rejectWithValue(error.response?.data);
//   }
// });

const initialState = {
  form_values: {
    dietaryPreferences: '',
    allergies: '',
    mealFrequency: '',
    cookingTime: '',
    groceryFrequency: '',
    groceryBudget: '',
    specialRequirements: '',
  },
  loading: false,
  error: null,
  status: false,
  data: [],
};

const mealForm = createSlice({
  name: 'meal_form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state.form_values[name] = value;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(initInsertMealinfo.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = false;
        state.data = [];
      })
      .addCase(initInsertMealinfo.fulfilled, (state, action) => {
        state.loading = false;
        state.form_values = action.payload;
      })
      .addCase(initInsertMealinfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // .addCase(initFetchMealinfo.fulfilled, (state, action) => {
      //   state.form_values = action.payload;
      // });
  },
});

export const { updateField, resetForm } = mealForm.actions;
export default mealForm.reducer;
