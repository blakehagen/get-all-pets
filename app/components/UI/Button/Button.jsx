import React from 'react';
import styles from './button.scss';

const Button = props => (
  <div className={styles.button}>
    {props.buttonName}
  </div>
);

export default Button;
