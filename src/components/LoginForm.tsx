"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledForm, StyledField, ErrorMsg, StyledSubmitButton } from './LoginFormStyles';

interface LoginFormValues {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
            // Add your login logic here
        },
    });

    return (
        <StyledForm onSubmit={formik.handleSubmit}>
                <StyledField
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <ErrorMsg>{formik.errors.username}</ErrorMsg>
                )}
                <StyledField
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <ErrorMsg>{formik.errors.password}</ErrorMsg>
                )}
            <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledForm>
    );
};

export default LoginForm;
