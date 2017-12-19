/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,

} from './constants';
import {
  ADD_LINK_SUCCESS,
  ADD_LINK_FAILED,
} from './../LinkFormContainer/constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  console.log("reducer callback");
  let links = state.get('links');
  links.push(link);
  return state.set('links', links);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
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
