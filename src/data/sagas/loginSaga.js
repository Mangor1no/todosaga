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
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../actions/actionTypes';

function loginFirebase(firebase, email, password) {
  try {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return error;
  }
}

function* login(action) {
  const { firebase, email, password } = action;
  try {
    const response = yield call(loginFirebase, firebase, email, password);
    if (response && response?.user) {
      const { user } = response;
      yield put({ type: LOGIN_SUCCESS, payload: user });
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, login);
}
