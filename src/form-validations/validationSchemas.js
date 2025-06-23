// src/validationSchemas.js
import * as Yup from 'yup';

// Step 1 Validation Schema
export const step1ValidationSchema = Yup.object({
    age: Yup.number()
        .positive('Age must be a positive number')
        .required('Age is required'),
    gender: Yup.string().required('Gender is required'),
    height: Yup.number()
        .positive('Height must be a positive number')
        .required('Height is required'),
    weight: Yup.number()
        .positive('Weight must be a positive number')
        .required('Weight is required'),
});

// Step 2 Validation Schema
export const step2ValidationSchema = Yup.object({
    occupationType: Yup.string().required('Occupation type is required'),
    physicalActivity: Yup.string().required('Physical activity is required'),
});

// Step 3 Validation Schema
export const step3ValidationSchema = Yup.object({
    fitnessGoals: Yup.array()
        .of(Yup.string().required('Fitness goal is required'))
        .min(1, 'At least one fitness goal is required')
        .required('Fitness goals are required'),
});
