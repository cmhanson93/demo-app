import { connect } from 'react-redux'
import { toggleTask } from '../utils/xhr'
import TaskListView from '../views/TaskListView'

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  toggleTask: id => dispatch(toggleTask(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListView)
