import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './selectMenu.scss';

const SelectMenu = (props) => {
  const { handleSelect, id, options, placeholder, value } = props;

  return (
    <Select
      className={styles.selectDropdown}
      clearable={false}
      placeholder={placeholder}
      onChange={selectedOption => handleSelect(id, selectedOption)}
      options={options}
      searchable={false}
      value={value}
    />
  );
};

SelectMenu.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string || null,
};

export default SelectMenu;
