/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import IconButton from './../IconButton';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || <Link to="/login">login</Link>;
  return (
    <div className={styles.appBar}>
      <IconButton
        handleClick={() => toggleDrawer()}
        icon="bars"
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
      />
      <div className={styles.heading}>
        Sum shit
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
