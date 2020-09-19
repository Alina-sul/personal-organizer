import React, {useContext,useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Context} from '../../../Context/Auth';
import axios from 'axios';

function LoginForm(props) {

    const [username,setUsername] = useState('');
    const [pass, setPass] = useState('');

    const context = useContext(Context);
    const test = () =>
     axios
        .post('http://localhost:3030/login', {
            username: username,
            password: pass
        })
         .then((res) => console.log('res', res));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username,pass);
        test().then((res) => console.log(res)).catch(err => {
            console.error(err);
        });


    };

    return (
        <div style={{width:300}}>
            <form className="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    id="standard-input-email"
                    label="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value) }
                />
                <TextField
                    id="standard-input-password"
                    label="Password"
                    type="password"
                    value={pass}
                    autoComplete="current-password"
                    onChange={(e) => setPass(e.target.value) }
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


