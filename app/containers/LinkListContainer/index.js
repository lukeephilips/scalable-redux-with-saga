/*
 *
 * LinkListContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLinkListContainer from './selectors';
import LinkList from './../../components/LinkList';
import { requestLinks, startAdd } from './actions';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.requestLinks(this.props.topicName);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.topicName !== this.props.topicName) {
      this.props.requestLinks(newProps.topicName);
    }
  }

  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

LinkListContainer.propTypes = {
  topicName: React.PropTypes.string.isRequired,
  requestLinks: React.PropTypes.func.isRequired,
};

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: (topicName) => dispatch(requestLinks(topicName)),
    startAdd: (topicName) => dispatch(startAdd(topicName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
