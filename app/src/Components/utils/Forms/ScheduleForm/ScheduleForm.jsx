import React, {useContext,useState,useEffect} from 'react';
import {Context} from "../../../Context/Auth";
import {Field, FieldArray, Form, Formik, FormikProps} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import studyForm from "./TypeForm/StudyForm";
import WorkoutForm from "./TypeForm/WorkoutForm";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {SelectComponent} from "../MaterialUiBased/FormComponents";


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
                        preferences: [{
                            day: '',
                            time: ''
                        }],
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
                                <Field name="type" component={SelectComponent} options={[
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
                                                <FieldArray name="courses" component={studyForm.coursesList}/> :
                                            props.values.type === 'workout' ?
                                                <Field name="sports" component={studyForm.coursesList}/> : null
                                        }
                                            <Button
                                                type="submit"
                                                size="large"
                                                color="primary"
                                                variant="contained"
                                                style={{marginTop: 20}}
                                            >
                                                NEXT
                                            </Button>
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
