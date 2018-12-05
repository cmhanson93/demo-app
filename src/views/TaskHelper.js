import React from 'react'

const TaskHelper = ({ match }) => (
  <div>
    <h3>Task Details</h3>
    <ul>
      <li>Task ID: {match.params.taskId}</li>
      <li>{match.params.text}</li>
    </ul>
  </div>
)

export default TaskHelper
