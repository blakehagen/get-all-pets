import React from 'react';
import styles from './petIcon.scss';

const PetIcon = props => (
  <div className={styles.icon}>
    <img src={props.icon} alt="pet-icon" />
  </div>
);

export default PetIcon;

