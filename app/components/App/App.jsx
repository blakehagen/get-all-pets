import React from 'react';
import PropTypes from 'prop-types';
import TopBar from 'components/TopBar';
import styles from './app.scss';

const App = props => (
  <div>
    <TopBar />
    <div className={styles.main}>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
