const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const ADD_TODO = 'ADD_TODO';

export const REMOVE_TODO_FINISHED = 'REMOVE_TODO_FINISHED';

export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS';

export const FILTER_TODO = 'FILTER_TODO';
export const FILTER_TODO_ALL = 'FILTER_TODO_ALL';
export const FILTER_TODO_ACTIVE = 'FILTER_TODO_ACTIVE';
export const FILTER_TODO_FINISHED = 'FILTER_TODO_FINISHED';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const LOGIN = createRequestTypes('LOGIN');
export const LOGOUT = createRequestTypes('LOGOUT');
