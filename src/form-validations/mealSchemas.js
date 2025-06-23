// src/validationSchemas.js
import * as Yup from 'yup';

// Step 1 Validation Schema
export const step1ValidationSchema = Yup.object({
  dietaryPreferences: Yup.string().required('Dietary preference is required'),
  allergies: Yup.string(),
});

// Step 2 Validation Schema
export const step2ValidationSchema = Yup.object({
  mealFrequency: Yup.string().required('Number of meals per day is required'),
  cookingTime: Yup.number()
    .positive('Cooking time must be a positive number')
    .required('Time available for cooking is required'),
});

// Step 3 Validation Schema
export const step3ValidationSchema = Yup.object({
  groceryFrequency: Yup.string().required('Grocery shopping frequency is required'),
  groceryBudget: Yup.number()
    .positive('Grocery budget must be a positive number')
    .required('Grocery budget is required'),
});

// Step 4 Validation Schema
export const step4ValidationSchema = Yup.object({
  specialRequirements: Yup.string(),
});
