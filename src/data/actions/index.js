/* eslint-disable no-undef */
import * as actionTypes from './actionTypes';

const todoID = 0;

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  id: todoID + 1,
  todo,
});

export const filterTodo = (filter) => ({
  type: actionTypes.FILTER_TODO,
  filter,
});

export const changeTodoStatus = (id) => ({
  type: actionTypes.CHANGE_TODO_STATUS,
  id,
});

function action(type, payload = {}) {
  return { type, ...payload };
}

export const userLogin = {
  request: (login) => action(actionTypes.LOGIN[REQUEST], { login }),
  success: (login, response) => action(actionTypes.LOGIN[SUCCESS], { login, response }),
  failure: (login, error) => action(actionTypes.LOGIN[FAILURE], { login, error }),
};
