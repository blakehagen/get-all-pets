import React, { PropTypes } from 'react';
import TopBar from 'components/TopBar';
import styles from './app.scss';

const App = (props) => {
  console.log('props --> ', props);
  return (
    <div>
      <TopBar />
      <div className={styles.main}>
        {/* {props.children} */}
        {/*this is the app*/}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

export default App;
