import TextField from "@material-ui/core/TextField";
import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const TextComponent = ( field ) => (
    <TextField
        type="text"
        variant="outlined"
        {...field}

    />
);

const SelectComponent = ( props ) => (
    <FormControl  className={props.className}>
        <InputLabel shrink className="input-label">
        {props.label}
    </InputLabel>
        <Select
            type="select"
            variant="outlined"
            {...props.field}
            value={props.field.value ? props.field.value : props.value}
            displayEmpty

        >

            {
                props.options ? props.options.map((x,i) => (
                    <MenuItem value={x.name} key={`${x.name}-${i}-select`} > {x.name} </MenuItem>
                )) : null

            }

        </Select>
    </FormControl>
);

export {TextComponent,SelectComponent};


