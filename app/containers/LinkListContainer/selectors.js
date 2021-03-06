import { createSelector } from 'reselect';
import selectNavigationContainer from './../NavigationContainer/selectors';
import { selectLoginContainer } from './../LoginContainer/selectors';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */
const selectRouteTopic = () => (state, props) => {
  if (props) {
    return props.params.topicName;
  }
}

const selectTopic = () => createSelector(
  selectNavigationContainer(),
  selectRouteTopic(),
  (navigationState, routeTopicName) => {
    const selectedTopic = navigationState.topics.find(topic => topic.name === routeTopicName);
    return selectedTopic || {
      name: ' ',
    };
  }
);

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectTopic(),
  selectLoginContainer(),
  (substate, topic, loginSubstate) => {
    return Object.assign(substate.toJS(), { topicName: topic.name, email: loginSubstate.email } )
  }
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
