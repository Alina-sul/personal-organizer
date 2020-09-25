import React, {useCallback, useEffect, useState} from 'react';
import Context from './Context';
import axios from 'axios';

function Provider(props) {
    const [auth,setAuth] = useState({
        auth: false,
        userId: ''
    });

    return (
        <Context.Provider
            value = {
                {
                    auth: auth,
                    setAuth: setAuth
                }
            }
        >
            {props.children}
        </Context.Provider>
    );
}

export default Provider;
