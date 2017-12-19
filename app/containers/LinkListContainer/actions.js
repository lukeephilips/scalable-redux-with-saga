/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  START_ADD,
  UP_VOTE,
} from './constants';

export function upVote(id, email, increment) {
  console.log("upvote action: ", id, email, increment);
  return {
    type: UP_VOTE,
    id,
    email,
    increment,
  };
}

export function startAdd(topicName) {
  return {
    type: START_ADD,
    topicName,
  };
}

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}
