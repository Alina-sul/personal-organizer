import React, {useContext,useState,useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Select from '@material-ui/core/Select';

const CoursesList = ({ values }) => (
        <Form className="courses-list">
            {console.log(values)}
            <TextField name="name"  label="Course Name" variant="outlined" />
            <TextField name="credit"  label="Credits" variant="outlined" />
        </Form>
    );



export {CoursesList};
