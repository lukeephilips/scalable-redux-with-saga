/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from './../../components/Navigation';
import { requestTopics, selectTopic } from './actions';

export class NavigationContainer extends React.Component {
  componentWillMount() {
    this.props.requestTopics();
  }
  render() {
    return (
      <div>
        <Navigation {...this.props} />
      </div>
    );
  }
}

NavigationContainer.propTypes = {
  requestTopics: React.PropTypes.func.isRequired,
};

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
