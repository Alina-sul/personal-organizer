import React, {useContext} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Login from "../pages/Login";
import {Context} from '../Context/Auth';
import Welcome from '../pages/Welcome';
import Dashboard from "../pages/Dashboard";
import OnBoard from "../pages/OnBoard";

function Routes() {
    const context = useContext(Context);
    const authRedirect = context.auth ? '/' : 'login';

    return (
        <>
            <Switch>
                <Route key="login" path="/login">
                    <Login/>
                </Route>
                <Route key="sign-up" path="/sign-up">
                    <OnBoard/>
                </Route>
                <Route key="/" exact path="/">
                    <Welcome />
                </Route>
                <Route key="*" path="*">
                    <Redirect to={authRedirect} />
                </Route>
            </Switch>
        </>
    );
}
export default Routes;
