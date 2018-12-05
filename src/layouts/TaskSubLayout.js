import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TaskNav from '../ui/TaskNav'

import BrowseTaskView from '../views/BrowseTaskView'
import AddTaskView from '../views/AddTaskView'
import TaskView from '../views/TaskView'

const TaskSubLayout = ({ match }) => (
  <div className="task-sub-layout">
    <aside>
      <TaskNav />
    </aside>
    <div className="content">
      <Switch>
        <Route exact path={match.path} component={BrowseTaskView} />
        <Route path={`${match.path}/add`} component={AddTaskView} />
        <Route path={`${match.path}/:taskId`} component={TaskView} />
      </Switch>
    </div>
  </div>
)

export default TaskSubLayout
