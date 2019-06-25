import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
// import Dashboard from './views/Dashboard';
import NotFound from './views/NotFound';
import Account from './views/Account';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    component={Account}
                    exact
                    path="/account"
                />
                <Route
                    component={NotFound}
                    exact
                    path="/not-found"
                />

                <Redirect to="/not-found" />
            </Switch> 
        )
    }
}