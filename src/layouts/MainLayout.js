import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../ui/Header'
import HomeView from '../views/HomeView'

import CalendarSubLayout from './CalendarSubLayout'
import TaskSubLayout from './TaskSubLayout'

const MainLayout = ({ match }) => (
  <div className="main-layout">
    <Header />
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={HomeView} />
        <Route path={`${match.path}/tasks`} component={TaskSubLayout} />
        <Route path={`${match.path}/calendar`} component={CalendarSubLayout} />
        <Redirect to={`${match.path}`} />
      </Switch>
    </main>
  </div>
)

export default MainLayout
