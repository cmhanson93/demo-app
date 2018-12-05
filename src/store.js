import { createStore, combineReducers } from 'redux';
import loggedUserReducer from './reducers/loggedUserReducer';
import tasks from './reducers/tasks'

const reducers = combineReducers({
  loggedUserState: loggedUserReducer,
  tasks
});

const store = createStore(reducers);

export default store;
