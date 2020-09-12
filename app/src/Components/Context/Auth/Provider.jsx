import React, {useCallback, useEffect, useState} from 'react';
import Context from './Context';
import axios from 'axios';

function Provider(props) {

    return (
        <Context.Provider
            value = {
                {

                }
            }
        >
            {props.children}
        </Context.Provider>
    );
}

export default Provider;
