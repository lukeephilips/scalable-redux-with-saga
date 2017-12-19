/**
*
* IconButton
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import styles from './styles.css';

function IconButton({ handleClick, icon, iconClass, buttonClass }) {
  return (
    <div
      className={classNames(styles.iconButton, buttonClass)}
      onClick={() => handleClick()}
    >
      <FontAwesome className={iconClass} name={icon} />
    </div>
  );
}

IconButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
  icon: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string.isRequired,
  buttonClass: React.PropTypes.string.isRequired,
};

export default IconButton;
