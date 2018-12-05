import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from './store';
import AuthRoute from './AuthRoute';

import UnauthRoute from './layouts/UnauthRoute';
import MainLayout from './layouts/MainLayout';

import './App.css';

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthRoute} />
        <AuthRoute path="/app" component={MainLayout} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
