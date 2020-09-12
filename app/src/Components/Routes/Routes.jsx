import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login";
import {Context} from '../Context/Auth';
import Dashboard from "../pages/Dashboard";

function Routes() {
    const context = useContext(Context);
    console.log(context.auth)
    return (
        <>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    {
                        // need to reduce the code later
                        context.auth ? <Redirect to="/" /> : <Redirect to="/login" />
                    }
                    <Dashboard />
                </Route>
                <Route path="*">
                    {
                        context.auth ? <Redirect to="/" /> : <Redirect to="/login" />
                    }
                </Route>
            </Switch>
        </>
    );
}
export default Routes;
