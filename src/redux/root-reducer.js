import { combineReducers } from '@reduxjs/toolkit';
// Import your reducers here
import authSlice from '@/redux/slice/auth-slice';
import formSlice from '@/redux/slice/formSlice';
import mealSlice from '@/redux/slice/mealSlice';
// import toastSlice from '@/redux/slice/common/toast-slice';
const rootReducer = combineReducers({
  auth: authSlice,
  form: formSlice,
  meal_form:mealSlice
  // toast: toastSlice,
});

export default rootReducer;
