import React from 'react';

import { Switch, Route } from 'react-router-dom';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" />
            <Route path="/register" />

            <Route path="/dashboard" />
            <Route path="/profile" />
        </Switch>
    );
}
