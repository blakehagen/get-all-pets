import React from 'react';
import autoBind from 'react-autobind';

import styles from './createPet.scss';

export default class CreatePet extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    console.log('render create pet');
    return (
      <div className={styles.container}>Create a new pet...</div>
    );
  }
}
