import React from 'react'
import { NavLink } from 'react-router-dom'

const TaskNav = ({ match }) => (
  <nav className="side-nav">
    <NavLink exact to={`${match.url}`} activeClassName="active">Browse</NavLink>
    <NavLink to={`${match.url}/add`} activeClassName="active">Add Task</NavLink>
  </nav>
)

export default TaskNav
