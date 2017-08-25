import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.scss';

const Button = props => (
  <div className={styles.button}>
    {props.buttonName}
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
