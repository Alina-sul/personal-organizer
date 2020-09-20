import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import PropTypes from "prop-types";
import Description from "../Description";

function SignUpForm({setStage}) {

    return (
        <>
            <div className="sign-up-form">
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={(values) => {
                        axios.post('http://localhost:3030/register', values)
                            .then((resp) => {
                                resp.status === 200 ? setStage(2)
                                    : console.log(resp)
                            }
                        );

                    }}

                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required('Required'),
                        username: Yup.string()
                            .required('Required'),
                        password: Yup.string()
                            .required('Password is required')
                            .min(8, 'Password is too short - should be 8 chars minimum.'),
                        passwordConfirmation: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    })}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (

                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label>What will be your user name? </label>
                                <TextField
                                    type="username"
                                    name="username"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                />
                                <span className="msg">
                                  {errors.username && touched.username && errors.username}
                                </span>
                            </div>

                            <div className="field">
                                <label>What is your email? </label>
                                <TextField
                                    type="email"
                                    name="email"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span className="msg">
                                  {errors.email && touched.email && errors.email}
                                </span>

                            </div>
                            <div className="field">
                                <label>Please choose a password</label>
                                <TextField
                                    type="password"
                                    name="password"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <span className="msg">
                                    {errors.password && touched.password && errors.password}
                                </span>
                            </div>
                            <div className="field">
                                <label>Confirm your password</label>
                                <TextField
                                    type="password"
                                    name="passwordConfirmation"
                                    variant="filled"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.passwordConfirmation}
                                />
                                <span className="msg">
                                     {errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}
                                </span>
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                size="large"
                                color="primary"
                                variant="contained"
                            >
                                SIGN UP
                            </Button>

                        </form>

                    )}
                </Formik>
            </div>
        </>
    );
}

SignUpForm.propTypes = {
    setStage: PropTypes.func
};

export default SignUpForm;

