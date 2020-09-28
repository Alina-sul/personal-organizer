import TextField from "@material-ui/core/TextField";
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const TextComponent = ( field ) => {
    return (
        <TextField
            type="text"
            variant="outlined"
            {...field}

        />
    )
};
const SelectComponent = ( props ) => {
    return (
        <FormControl  className={props.className}>
            <InputLabel shrink className="input-label">
                {props.label}
            </InputLabel>
            <Select
                type="select"
                variant="outlined"
                {...props.field}
                displayEmpty

            >

                {
                    props.options ? props.options.map((x,i) => (
                        <MenuItem value={x.name} key={`${x.name}-${i}-select`} > {x.name} </MenuItem>
                    )) : null

                }

            </Select>
        </FormControl>
    )
};
const RadioComponent = ( props ) => {
    return (
        <>
                <RadioGroup  {...props.field} value={props.field.value ? props.field.value : "General"}>
                    {
                        props.options.map((x,i) => (
                            <FormControlLabel
                                key={`${x.name}+${i}+radio`}
                                value={x.name}
                                label={x.name}
                                control={<Radio />}
                            />
                        ))
                    }

                </RadioGroup>
                {
                    console.log(props)
                }
        </>
    )
};

export {TextComponent,SelectComponent,RadioComponent};


