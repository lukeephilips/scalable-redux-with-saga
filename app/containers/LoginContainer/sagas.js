import { put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { goBack } from 'react-router-redux';
import { LOGIN, GO_BACK } from './constants';

// Individual exports for testing
function* handleGoBack() {
  yield put(goBack());
}

export function* doLoginSaga() {
  yield* takeLatest(LOGIN, handleGoBack);
}

export function* goBackSaga() {
  yield* takeLatest(GO_BACK, handleGoBack);
}

// All sagas to be loaded
export default [
  doLoginSaga,
  goBackSaga,
];
