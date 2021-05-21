import { combineReducers } from 'redux';
import todos from './todos';
import todoFilter from './todoFilter';
import auth from './auth';

export default combineReducers({
  todos,
  todoFilter,
  auth,
});
