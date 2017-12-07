// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REQUEST_TOPICS } from './constants';
import { requestTopicsSucceeded, requestTopicsFailed } from './actions';

// Individual exports for testing
export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics')
    .then(resp => resp.json());
}

function* fetchTopics() {

  try {
    const topics = yield call(fetchTopicsFromServer);
    console.log("request from server");
    yield put(requestTopicsSucceeded(topics));
  } catch (e) {
    console.log("request from server failed");

    yield put(requestTopicsFailed(e.message));
  }
}

export function* fetchTopicsSaga() {
  console.log("first saga");
  yield*  takeLatest(REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicsSaga,
];
