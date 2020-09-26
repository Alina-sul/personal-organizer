import React, {useContext,useState,useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Select from '@material-ui/core/Select';
import studyForm from "./index";

const TextComponent = ( field, insert, remove, push, form, ...props ) => (
    <TextField
        type="text"
        variant="outlined"
        {...field}
        label="Course Name"
    />
);

const CoursesList = ({ field, insert, remove, push, form, ...props }) => {
    return(
        <>
            {
                form.values.courses.map((course,index) => {
                    return <Field name={`courses[${index}].courseName`} as={TextComponent} key={`courses[${index}].courseName`} />
                })

            }

        </>
    )
};

export {CoursesList};



