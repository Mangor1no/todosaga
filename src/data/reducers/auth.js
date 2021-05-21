import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/actionTypes';

const initialState = {};

const todoFilter = (state = initialState, { type, payload, error }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
};

export default todoFilter;
