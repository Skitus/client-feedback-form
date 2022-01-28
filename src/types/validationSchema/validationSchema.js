import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string().email('Must be a valid email')
        .required('Email is required'),
    message: yup
        .string()
        .required('Message is required'),
});