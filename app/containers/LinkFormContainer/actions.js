/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILED,
  GO_BACK,
} from './constants';

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
  return {
    type: ADD_LINK_SUCCESS,
    link,
  };
}

export function addLinkFailed(link, message) {
  return {
    type: ADD_LINK_FAILED,
    link,
    message,
  };
}

export function goBack() {
  return {
    type: GO_BACK,
  };
}
