import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TaskView from './TaskView'

const TaskListView = ({ tasks, toggleTask }) => (
  <ul>
    {tasks.map(task => (
      <Link to={`tasks/${task.id}/${ task.text }`}>
        <TaskView key={task.id} {...task} onClick={() => toggleTask(task.id)} />
      </Link>
    ))}
  </ul>
)

TaskListView.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTask: PropTypes.func.isRequired
}

export default TaskListView
