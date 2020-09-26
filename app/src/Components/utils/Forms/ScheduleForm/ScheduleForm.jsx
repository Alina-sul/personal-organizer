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
                                name: '',
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
                        hoursLimit: false,
                        hoursAvail: 0
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
                        courses: Yup.array()
                            .of(Yup.object()
                            .shape({
                                name: Yup.string()
                                    .required('Required'),
                                credits: Yup.number()
                                    .required('Required'),
                                hoursWeek: Yup.number(),
                                weekDay: Yup.string(),
                                startHour: Yup.string(),
                                endHour: Yup.string(),
                                priority: Yup.string(),
                            }))

                    })}
                >
                    {(props: FormikProps<any>)  => (

                        <>
                            <div className="field">
                                <label>What type of schedule do you need? </label>
                                <Field name="type" component={MySelect} />
                            </div>
                            {
                               props.values.type ?
                                    <>
                                       {
                                           forms[props.values.type].map(x =>
                                           {
                                               console.log(props.values)
                                               return <div key={`div-${x.name}`} className="field">
                                               <label key={`label-${x.name}`}> {x.label} </label>
                                                   {
                                                       x.note ?
                                                           <span key={`span-${x.name}`} className="field-note">
                                                               {x.note}
                                                           </span> : null
                                                   }
                                                   {
                                                       typeof(x.name === 'courses') ?
                                                           <FieldArray  key={`field-${x.name}`} name={x.name} component={x.component} /> :
                                                           <Field key={`field-${x.name}`} name={x.name} component={x.component} />
                                                   }

                                           </div>

                                           }
                                            )
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
                                    </>
                                    : null

                            }

                        </>

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
