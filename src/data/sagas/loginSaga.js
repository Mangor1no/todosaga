// import firebase from 'firebase';
// import { call, cancel, cancelled, fork, put, take } from 'redux-saga/effects';
// import * as actionTypes from '../actions/actionTypes';

// function* login() {
//   try {
//     const auth = firebase.auth();
//     const result = yield call(
//       [auth, auth.createUserWithEmailAndPassword],
//       action.user.email,
//       action.user.password
//     );

//     yield put({ type: actionTypes.LOGIN[SUCCESS], user: action.user });
//   } catch (error) {
//     const error_message = { code: error.code, message: error.message };

//     yield put({ type: AUTHENTICATION_FAILED, error: error_message });
//   }
// }
