import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

function* fetchPosts() {}

function* fetchPostsSuccess() {}

export default function* rootSaga() {
  yield all([fetchPosts()]);
}
