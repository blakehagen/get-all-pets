import React from 'react';
import PropTypes from 'prop-types';
import styles from './textInput.scss';

const TextInput = (props) => {
  const { type, placeholder, id, handleInput } = props;

  return (
    <input
      className={styles.textField}
      type={type}
      placeholder={placeholder}
      onKeyUp={e => handleInput(e, id)}
    />
  );
};

TextInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
