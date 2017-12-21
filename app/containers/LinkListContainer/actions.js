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
  UP_VOTE_SUCCESS,

} from './constants';

export function upVote(id, email, increment) {
  return {
    type: UP_VOTE,
    id,
    email,
    increment,
  };
}

export function upVoteSuccess(link) {
  console.log("link: ", link);
  return {
    type: UP_VOTE_SUCCESS,
    link,
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
