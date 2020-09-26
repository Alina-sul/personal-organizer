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

const MySelect = ({ field, insert, remove, push, ...props }) => {

    return <Select
        native
        type="select"
        variant="outlined"
        {...field}
        {...props}
        fullWidth
    >

        <option aria-label="None" value="" />
        <option value="study"> Study </option>
        <option value="workout"> Workout </option>

    </Select>

};


function ScheduleForm(props) {

    const [form, setForm] = useState('NOTHING');
    const context = useContext(Context);

    const forms = {
        study: [
            {
                name: 'courses',
                label: 'Please list your courses:',
                note: <NavLink to="/">
                    'Total hours per week' and 'Existing schedule' are not mandatory.
                    In case you have no prior preferences each course will obtain PO's default setup
                </NavLink>,
                component: studyForm.coursesList
            }
        ],
        workout: [
            {
                name: 'sample2',
                component: MySelect
            }
        ],
    };

    return (
        <>
            <div className="sign-up-form">
                <Formik
                    initialValues={{
                        type: '',
                        courses: [
                            {
                                courseName: '',
                                credits: '',
                                hoursWeek: 0,
                                weekDay: '',
                                startHour: '',
                                endHour: '',
                                priority: ''
                            },
                        ],
                        prefDays: [],
                        prefTime: [],
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
                                <Field name="type" component={MySelect} />
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
