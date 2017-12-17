/**
*
* LinkForm
*
*/

import React from 'react';
import TextInput from './../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div
            className={styles.heading}
          >
            Login with your email
          </div>
          <TextInput
            placeholder={"URL"}
            className={styles.input}
          />
          <TextInput
            placeholder={"description"}
            className={styles.input}
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
              onClick={this.login}
            >
            log in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LinkForm.propTypes = {
  goBack: React.PropTypes.func.isRequired,
};

export default LinkForm;
