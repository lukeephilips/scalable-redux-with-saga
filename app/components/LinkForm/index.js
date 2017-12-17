/**
*
* LinkForm
*
*/

import React from 'react';
import classNames from 'classnames';

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
          <input
            className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
            placeholder="URL"
            ref={(f) => { this.emailField = f; }}
            type="text"
          />
          <input
            className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
            placeholder="description"
            ref={(f) => { this.description = f; }}
            type="text"
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

export default LinkForm;
