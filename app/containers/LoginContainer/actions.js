/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  GO_BACK,
} from './constants';

export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

export function goBack() {
  return {
    type: GO_BACK,
  };
}
