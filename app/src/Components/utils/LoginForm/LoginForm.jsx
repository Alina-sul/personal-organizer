import React, {useContext} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Context} from '../../Context/Auth';

function LoginForm(props) {

    const context = useContext(Context);

    const handleSubmit = (e) => {
        console.log('test',e)
    };

    return (
        <div style={{width:300}}>
            <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-input-email" label="email"  />
                <TextField
                    id="standard-input-password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="small"
                >
                    login
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
