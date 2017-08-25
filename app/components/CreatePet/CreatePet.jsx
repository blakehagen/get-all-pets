import React from 'react';
import autoBind from 'react-autobind';
import Form from './Form';

import styles from './createPet.scss';

export default class CreatePet extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Create a New Pet</h2>
        <Form />
      </div>
    );
  }
}
