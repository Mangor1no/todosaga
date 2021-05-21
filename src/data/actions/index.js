import { ADD_TODO, CHANGE_TODO_STATUS, FILTER_TODO, LOGIN_REQUEST } from './actionTypes';

let todoID = 0;

function action(type, payload = {}) {
  return { type, ...payload };
}

// eslint-disable-next-line no-plusplus
export const addTodo = (todo) => action(ADD_TODO, { id: todoID++, todo });

export const filterTodo = (filter) => action(FILTER_TODO, filter);

export const changeTodoStatus = (id) => action(CHANGE_TODO_STATUS, id);

export const loginRequest = (firebase, email, password) => {
  return action(LOGIN_REQUEST, { firebase, email, password });
};
