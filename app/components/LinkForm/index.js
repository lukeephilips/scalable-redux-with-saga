/**
*
* LinkForm
*
*/

import React from 'react';
import TextInput from './../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;

    if (!url.match(/[-a-zA-Z0-9@:%._\+~#+]{2,256}\.[a-z]{2,6}\b([-a-zA-z0-9@:%_\+.~#?&//=]*)/)) {
      urlError = 'Please enter a valid URL';
    }
    if (!description) {
      descriptionError = 'Please enter a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }

    const link = {
      url,
      description,
      topicName: this.props.topicName,
    };
    this.props.addLink(link);
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div
            className={styles.heading}
          >
            Add Link
          </div>
          <TextInput
            placeholder={"URL"}
            className={styles.input}
            errorText={this.state.urlError}
            ref={(f) => (this.url = f)}
          />
          <TextInput
            placeholder={"description"}
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={(f) => (this.description = f)}
          />
          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.goBack}
            >
            cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
            Add Link
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LinkForm.propTypes = {
  goBack: React.PropTypes.func.isRequired,
  addLink: React.PropTypes.func.isRequired,
  topicName: React.PropTypes.string.isRequired,
};

export default LinkForm;
