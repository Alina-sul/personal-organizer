import React, {useContext,useState,useEffect} from 'react';
import {Context} from "../../../Context/Auth";
import {Field, Form,Formik, FormikProps} from "formik";
import axios from "axios";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import StudyForm from "./TypeForm/StudyForm";
import WorkoutForm from "./TypeForm/WorkoutForm";
import PropTypes from "prop-types";

const MySelect = ({ field, ...props }) => {

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
                name: 'sample',
                component: MySelect
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
                        existingSchedule: {},
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
                                    <div>
                                       {
                                           forms[props.values.type].map(x =>
                                            <Field key={`field-${x.name}`} name={x.name} component={x.component} />
                                            )
                                       }

                                       <Button
                                            type="submit"
                                            size="large"
                                            color="primary"
                                            variant="contained"
                                            style={
                                                { marginTop: 20}
                                            }
                                            >
                                            NEXT
                                        </Button>
                                    </div>
                                    : null

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
