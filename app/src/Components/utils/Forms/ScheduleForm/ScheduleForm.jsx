import React, {useContext,useState,useEffect} from 'react';
import {Context} from "../../../Context/Auth";
import {Field, FieldArray, Form, Formik, FormikProps} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CoursesList from "./utils/CoursesList";
import PropTypes from "prop-types";
import {SelectComponent} from "../MaterialUiBased/FormComponents";
import Preferences from "./utils/Preferences";


function ScheduleForm(props) {

    const [form, setForm] = useState('NOTHING');
    const context = useContext(Context);


    return (
        <>
            <div className="schedule-form">
                <Formik
                    initialValues={{
                        type: '',
                        courses: [
                            {
                                courseName: '',
                                credits: '',
                                hoursWeek: '',
                                priority: ''
                            },
                        ],
                        existingSchedule: [
                            {
                                weekDay: '',
                                startHour: '',
                                endHour: ''
                            }
                        ],
                        preferences: {
                            type: '',
                            additional: []
                        },
                        hoursLimit: -1,
                    }}
                    onSubmit={(values) => {
                        // axios.post('http://localhost:3030/schedule', values)
                        //     .then((resp) => {
                        //                 console.log(resp)
                        //         }
                        //     );
                        console.log(values)

                    }}
                    validationSchema={Yup.object().shape({
                        type: Yup.string()
                            .required('Required'),
                        // courses: Yup.array()
                        //     .of(Yup.object()
                        //     .shape({
                        //         courseName: Yup.string()
                        //             .required('Required'),
                        //         credits: Yup.number()
                        //             .required('Required'),
                        //         hoursWeek: Yup.number(),
                        //         weekDay: Yup.string(),
                        //         startHour: Yup.string(),
                        //         endHour: Yup.string(),
                        //         priority: Yup.string(),
                        //     }))
                    })}
                >
                    {(props: FormikProps<any>)  => (
                        <Form>
                            <div className="field">
                                <label>What type of schedule do you need? </label>
                                <Field name="type" component={SelectComponent}  type={'select'} className="fullwidth" options={[
                                    {
                                        name: 'study'
                                    },
                                    {
                                        name: 'workout'
                                    }
                                ]}/>
                            </div>
                            {
                                props.values.type ?

                                        <>
                                        {
                                            props.values.type === 'study' ?
                                                <FieldArray name="courses" component={CoursesList}/> :
                                            props.values.type === 'workout' ?
                                                <Field name="sports" component={CoursesList}/> : null
                                        }

                                            <FieldArray name="preferences" component={Preferences}/>
                                            <div>
                                                <Button
                                                    type="submit"
                                                    size="large"
                                                    color="primary"
                                                    variant="contained"
                                                    style={{marginTop: 20}}
                                                >
                                                    NEXT
                                                </Button>
                                            </div>
                                        </> : null


                            }
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

ScheduleForm.propTypes = {
    setStage: PropTypes.func
};
export default ScheduleForm;
