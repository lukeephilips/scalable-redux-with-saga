/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import TextInput from './../TextInput';
import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};

  login = () => {
    const email = this.emailField.value();
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'Please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
    this.props.login(email);
  }

  render() {
    const fieldError = this.state.errorText ? (
      <div
        className={styles.errorMessage}
      >
        {this.state.errorText}
      </div>
    ) : null;

    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>
        <TextInput
          placeholder={"enter your email"}
          // className={input}
          ref={(f) => { this.emailField = f; }}
          errorText={this.state.errorText}
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
    );
  }
}

Login.propTypes = {
  login: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired,

};

export default Login;
