import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <h1>Welcome!</h1>
    <nav>
      <NavLink exact to="/app" activeClassName="active">Home</NavLink>
      <NavLink to="/app/tasks" activeClassName="active">Tasks</NavLink>
      <NavLink to="/app/calendar" activeClassName="active">Calendar</NavLink>
    </nav>
  </header>
)

export default Header
