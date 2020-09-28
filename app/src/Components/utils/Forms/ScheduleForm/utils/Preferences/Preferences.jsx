import React, {useContext,useState,useEffect} from 'react';
import {Field, FieldArray, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import {RadioComponent} from "../../../MaterialUiBased/FormComponents"
import {RadioGroup} from "formik-material-ui";
import {FormControlLabel, Radio} from "@material-ui/core";


const Preferences = ({ field, ...props }) => {

    return(
        <>
            <label className="field-divider">Add your preferences:</label>
            <Field component={RadioComponent} name="preferences.type" options={[{name:'General'},{name:'Detailed'}]} />
        </>
    )
};

export default Preferences;



