import React from 'react';
import autoBind from 'react-autobind';
import SelectMenu from '../../UI/SelectMenu';
import TextInput from '../../UI/TextInput';
import petOptions from '../../../dataOptions/newPetOptions';
import styles from './form.scss';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.clearForm = this.clearForm.bind(this);

    this.state = {
      petName: '',
      petType: '',
      petSelection: null,
      petFavColor: null,
      gender: null,
    };
  }

  handleInput(e, id) {
    this.setState({ [id]: e.target.value });
  }

  handleSelect(id, selection) {
    this.setState({ [id]: selection.value });
  }

  clearForm() {
    console.log('clearForm');
    this.setState({
      petName: '',
      petType: null,
      petSelection: null,
      petFavColor: null,
      gender: null,
    });
  }

  render() {
    console.log('this.state -->', this.state);
    return (
      <div className={styles.formContainer}>

        <SelectMenu
          placeholder="Select Animal"
          options={petOptions.animalType}
          handleSelect={this.handleSelect}
          id="petSelection"
          value={this.state.petSelection}
        />

        <SelectMenu
          placeholder="Boy/Girl"
          options={petOptions.gender}
          handleSelect={this.handleSelect}
          id="gender"
          value={this.state.gender}
        />

        <TextInput
          type="text"
          id="petName"
          placeholder="Pet Name"
          handleInput={this.handleInput}
          value={this.state.petName}
        />

        <SelectMenu
          placeholder="Pet Favorite Color"
          options={petOptions.colorOptions}
          handleSelect={this.handleSelect}
          id="petFavColor"
          value={this.state.petFavColor}
        />
        <br />
        <button onClick={this.clearForm}>Clear form</button>
      </div>
    );
  }
}
