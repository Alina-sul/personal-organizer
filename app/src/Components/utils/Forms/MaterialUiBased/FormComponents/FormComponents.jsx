import TextField from "@material-ui/core/TextField";
import React from "react";
import Select from "@material-ui/core/Select";

const TextComponent = ( field ) => (
    <TextField
        type="text"
        variant="outlined"
        {...field}

    />
);

const SelectComponent = ( props ) => (
    <Select
        native
        type="select"
        variant="outlined"
        {...props.field}
        {...props.label}
        fullWidth
    >

        <option aria-label="None" value="" />
        {
            props.options ? props.options.map((x,i) => (
                <option value={x.name} key={`${x.name}-${i}-select`} > {x.name} </option>
            )) : null

        }
        {console.log(props)}

    </Select>
);

export {TextComponent,SelectComponent};
