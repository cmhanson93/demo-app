import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TaskNav from '../ui/TaskNav'

import BrowseTaskView from '../views/BrowseTaskView'
import AddTaskView from '../views/AddTaskView'
import TaskHelper from '../views/TaskHelper'

const TaskSubLayout = ({ match }) => (
  <div className="task-sub-layout">
    <aside>
      <TaskNav />
    </aside>
    <div className="content">
      <Switch>
        <Route exact path="/app/tasks" component={BrowseTaskView} />
        <Route path="/app/tasks/add" component={AddTaskView} />
        <Route path="/app/tasks/:taskId/:text" render={TaskHelper} />
      </Switch>
    </div>
  </div>
)

export default TaskSubLayout
