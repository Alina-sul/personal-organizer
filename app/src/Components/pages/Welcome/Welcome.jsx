import React from 'react';
import './Welcome.sass'
import {NavLink} from "react-router-dom";
function Welcome(props) {
    return (
        <>
        <div className="main">
            <img src="images/po001.png" height="100" alt="po"/>
                <h1 className="welcome-text">Hi I'm <span style={{color:'black'}}>PO</span>.</h1>

            <p className="links">
                <NavLink to="/login">CONTINUE</NavLink>
                /
                <NavLink to="/sign-up">START</NavLink>
            </p>
        </div>
        </>
    );
}

export default Welcome;
