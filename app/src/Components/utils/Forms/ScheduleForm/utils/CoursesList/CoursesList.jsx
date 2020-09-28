import React from 'react';
import {Field} from "formik";
import Button from "@material-ui/core/Button";
import {SelectComponent, TextComponent} from "../../../MaterialUiBased/FormComponents"
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';



const CoursesList = ({ field, insert, remove, push, form, ...props }) => {
    return(
        <>
            <label>Please list your courses:</label>
            <span className="field-note">
                NOTE: 'Hours per week' field is relevant in case you do not have a predefined schedule.<br/>
                In case you provide neither, PO will use the <u>auto schedule mode</u>.
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
                                   label="Priority"
                                   value="normal"
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

export default CoursesList;



