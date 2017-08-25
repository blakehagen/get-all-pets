import React from 'react';
import autoBind from 'react-autobind';

import styles from './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        HOME HOME HOME
        <div>** Show List of Pets Here **</div>
      </div>
    );
  }
}
