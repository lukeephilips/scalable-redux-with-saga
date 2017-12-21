/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  UP_VOTE_SUCCESS,

} from './constants';
import {
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILED,
} from './../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  let links = state.get('links');

  if(!links.find((l) => l.id === link.id)){
    links.push(link);
    state.set('links', links);
  }
  return state;
}

function upVote(state, link) {
  // let links = state.get('links');
  // const index = links.findIndex((l) => l.id === link.id)
  // let newLinks = links.splice(index, 1, link)
  // state.set('links', newLinks);
  // return state;

  const links = state.get('links');
  const newLinks = links.map((l) => {
    if (l.id === link.id) {
      return Object.assign({}, link);
    }
    return l;
  });
  return state.set('links', newLinks);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case UP_VOTE_SUCCESS:
      return upVote(state, action.link);
    case ADD_LINK_SUCCESS:
      return addLink(state, action.link);
    case ADD_LINK_FAILED:
      return state;
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links);
    case REQUEST_LINKS_FAILED:
      return state;
    default:
      return state;
  }
}

export default linkListContainerReducer;
