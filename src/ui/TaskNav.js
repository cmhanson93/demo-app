import React from 'react'
import { NavLink } from 'react-router-dom'

const TaskNav = ({ match }) => (
  <nav className="side-nav">
    <NavLink exact to="/app/tasks" activeClassName="active">Browse</NavLink>
    <NavLink to="/app/tasks/add" activeClassName="active">Add Task</NavLink>
  </nav>
)

export default TaskNav
