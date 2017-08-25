import React from 'react';
import { Link } from 'react-router';
import styles from './topBar.scss';
import Button from '../UI/Button';
import PetIcon from './PetIcon';

const TopBar = () => {
  const dog = require('./images/icons8-dog.png');
  const cat = require('./images/icons8-cat.png');
  const bunny = require('./images/icons8-rabbit.png');
  const frog = require('./images/icons8-frog.png');
  const turtle = require('./images/icons8-turtle.png');
  const fish = require('./images/icons8-aquarium.png');

  return (
    <div className={styles.container}>
      <div className={styles.titleImages}>
        <PetIcon icon={dog} />
        <PetIcon icon={cat} />
        <PetIcon icon={bunny} />

        <div className={styles.mobileIcon}>
          <img src={dog} alt="dog-icon" />
        </div>

        <h1 className={styles.title}>
          <Link to="/">
            <span>Get All Pets</span>
          </Link>
        </h1>


        <PetIcon icon={frog} />
        <PetIcon icon={turtle} />
        <PetIcon icon={fish} />
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/create-pet">
          <Button buttonName="Create New Pet" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
