import React from 'react';
import PropTypes from 'prop-types';
import styles from './petIcon.scss';

const PetIcon = props => (
  <div className={styles.icon}>
    <img src={props.icon} alt="pet-icon" />
  </div>
);

PetIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default PetIcon;

