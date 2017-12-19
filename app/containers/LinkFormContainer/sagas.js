// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';

import { ADD_LINK, GO_BACK } from './constants';
import { addLinkSuccess, addLinkFailed } from './actions';
import { createLink } from './../../api';

// Individual exports for testing
function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSuccess(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFailed(action.link, e.message));
  }
}

export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

function* handleGoBack() {
  v
}

export function* goBackSaga() {
  yield* takeLatest(GO_BACK, handleGoBack);
}

// All sagas to be loaded
export default [
  addLinkSaga,
  goBackSaga,
];
