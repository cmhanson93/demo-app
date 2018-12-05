import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../views/Login'

const UnauthRoute = () => (
  <div className="unauth-layout">
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
)

export default UnauthRoute
