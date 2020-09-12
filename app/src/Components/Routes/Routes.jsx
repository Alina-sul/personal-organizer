import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/login">

                </Route>
                <Route exact path="/">

                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}
export default Routes;
