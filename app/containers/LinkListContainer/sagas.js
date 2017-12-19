// import { take, call, put, select } from 'redux-saga/effects';
import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { push } from 'react-router-redux';
import { incrementVote } from './../../api';

import {
  REQUEST_LINKS,
  START_ADD,
  UP_VOTE,
} from './constants';
import { requestLinksSucceeded, requestLinksFailed } from './actions';

function fetchLinksFromServer(topicName) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`)
    .then(resp => resp.json());
}
// Individual exports for testing
export function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topicName);
    yield put(requestLinksSucceeded(links));
  } catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

function* startAdd(action) {
  yield put(push(`/topics/${action.topicName}/add`));
}

export function* startAddSaga() {
  yield* takeLatest(START_ADD, startAdd);
}

function* upVote(action) {
  const serverLink = yield call(incrementVote, {id: action.id, email: action.email, increment: action.increment});
}

export function* upVoteSaga() {
  yield* takeLatest(UP_VOTE, upVote);
}

export function* defaultSaga() {
  yield* takeLatest(REQUEST_LINKS, fetchLinks);
}

// All sagas to be loaded
export default [
  defaultSaga,
  startAddSaga,
  upVoteSaga,
];
