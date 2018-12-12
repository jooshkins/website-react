import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtPanel from './ArtPanel'
import CodePanel from './CodePanel'
import AboutPanel from './AboutPanel'
import NotFound from './NotFound'

export default () => (
    <Switch>
        <Route
        exact
        path="/"
        component={ArtPanel}
        />
        <Route
        exact
        path="/code"
        component={CodePanel}
        />
        <Route
        exact 
        path="/about"
        component={AboutPanel}
        />
        <Route component={NotFound} />
    </Switch>
);
