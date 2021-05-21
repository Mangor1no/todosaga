/* eslint-disable no-undef */
import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  FILTER_TODO,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';

const todoID = 0;

function action(type, payload = {}) {
  return { type, ...payload };
}

export const addTodo = (todo) => action(ADD_TODO, { id: todoID + 1, todo });

export const filterTodo = (filter) => action(FILTER_TODO, filter);

export const changeTodoStatus = (id) => action(CHANGE_TODO_STATUS, id);

export const loginRequest = (firebase, email, password) => {
  return action(LOGIN_REQUEST, { firebase, email, password });
};

export const loginSuccess = (payload) => {
  return action(LOGIN_REQUEST, payload);
};

export const loginFailure = (error) => {
  return action(LOGIN_REQUEST, error);
};
