import React, {useContext,useState,useEffect} from 'react';
import {Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Select from '@material-ui/core/Select';
import studyForm from "./index";
import {NavLink} from "react-router-dom";
import {SelectComponent, TextComponent} from "../../../MaterialUiBased/FormComponents"
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';



const CoursesList = ({ field, insert, remove, push, form, ...props }) => {
    return(
        <>
            <label>Please list your courses:</label>
            <span className="field-note">
                            'Total hours per week' and 'Existing schedule' are not mandatory.<br/>
                                In case you have no prior preferences each course will obtain PO's default setup
            </span>

            {
                form.values.courses.map((course,index) => {
                    return (
                    <div key={`course[${index}]`}>
                        <Field name={`courses[${index}].courseName`} as={TextComponent} key={`courses[${index}].courseName`} label="* Course Name" className="course-name"/>
                        <Field name={`courses[${index}].credits`} as={TextComponent} key={`courses[${index}].credits`} label="Credits" className="credits" />
                        <Field name={`courses[${index}].hoursWeek`} as={TextComponent} key={`courses[${index}].hoursWeek`} label="Hours a week" className="thw"/>
                        <Field name={`courses[${index}].priority`}
                               key={`courses[${index}].priority`}
                               className="priority"
                               component={SelectComponent}
                               options={[
                            {
                                name: 'high'
                            },
                            {
                                name: 'normal'
                            },
                            {
                                name: 'low'
                            }
                        ]}/>
                        <IconButton aria-label="delete" style={{marginTop:5}} onClick={() => remove(index)} >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    )})

            }
            <div className="add-button">
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<AddIcon />}
                    onClick={() => push({ courseName: '', credits: '', hoursWeek: '', priority: '' })}
                >
                    Add Course
                </Button>
            </div>

        </>
    )
};

export {CoursesList};



