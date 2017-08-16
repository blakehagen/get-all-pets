import React from 'react';
import styles from './topBar.scss';

const TopBar = () => {
  const logo = require('./images/icons8-dog.png');

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <h1 className={styles.title}>Get All Pets</h1>
    </div>
  );
};

export default TopBar;
