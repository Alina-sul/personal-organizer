import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login";
import {Context} from '../Context/Auth';
import Dashboard from "../pages/Dashboard";

function Routes() {
    const context = useContext(Context);
    const authRedirect = context.auth ? '/' : 'login';

    return (
        <>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <Redirect to={authRedirect} />
                    <Dashboard />
                </Route>
                <Route path="*">
                    <Redirect to={authRedirect} />
                </Route>
            </Switch>
        </>
    );
}
export default Routes;
