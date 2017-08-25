import React from 'react';
// import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import TextInput from '../../UI/TextInput';
import styles from './form.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      petName: '',
      petType: '',
    };
  }

  handleInput(e, id) {
    this.setState({ [id]: e.target.value });
  }

  render() {
    console.log('this.state -->', this.state);
    return (
      <div className={styles.formContainer}>
        <TextInput
          type="text"
          id="petName"
          placeholder="Pet Name"
          handleInput={this.handleInput}
        />

        <TextInput
          type="text"
          id="petType"
          placeholder="Animal Type"
          handleInput={this.handleInput}
        />

      </div>
    );
  }
}
