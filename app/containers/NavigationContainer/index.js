/*
 *
 * NavigationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from './../../components/Navigation';
import { requestTopics } from './actions';

export class NavigationContainer extends React.Component {
  static propTypes = {
    requestTopics: React.PropTypes.func.isRequired,
  }
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

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
