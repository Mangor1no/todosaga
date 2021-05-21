import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { loginSuccess } from '../actions';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../actions/actionTypes';

function loginFirebase(firebase, email, password) {
  try {
    const response = firebase.auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch (error) {
    return error;
  }
}

function* login(action) {
  const { firebase, email, password } = action;
  try {
    const response = yield call(loginFirebase, firebase, email, password);
    console.log(response);
    // if (response) yield put(loginSuccess(response));
  } catch (error) {
    alert(error);
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export function* loginWatcher() {
  yield takeEvery(LOGIN_REQUEST, login);
}
