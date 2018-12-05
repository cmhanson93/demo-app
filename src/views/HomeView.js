import React from 'react'
import { logout } from '../utils/xhr'

const HomeView = ({ history }) => (
  <div className="task-sub-layout">
    <aside>
      Home
      <br /><br />
      <button onClick={() => {
        logout().then(() => {
          history.push('/')
        })
      }}>Logout</button>
    </aside>
    <div className="content">
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h5>
    </div>
  </div>
)

export default HomeView
