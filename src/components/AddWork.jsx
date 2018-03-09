import React from 'react';
import { connect } from 'react-redux';
import constants from './../constants';
const { types } = constants;
import PropTypes from 'prop-types';
import { addWork } from './../actions';

function AddWork(props){
  let _title;
  let _medium;
  let _description;
  let _height;
  let _width;
  let _price;
  let _img;

  function handleAddWorkFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(addWork(_title.value, _medium.value, _description.value, _height.value, _width.value, _price.value));
    console.log('form submitted');
    _title.value = '';
    _medium.value = '';
    _description.value = '';
    _height.value = '';
    _width.value = '';
    _price.value = '';
  }

  return (
    <div>
      <h5>Fill out form to add a new work</h5>
      <form onSubmit={handleAddWorkFormSubmission}>
        <p>Title:</p>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <br />
        <br />
        <p>Medium:</p>
        <input
          id='medium'
          placeholder='Medium'
          ref={(input) => {_medium = input;}}/>
        <br />
        <br />
        <p>Description:</p>
        <textarea
          id='description'
          placeholder="Add Description Here....."
          ref={(textarea) => {_description = textarea;}}/>
        <p>Height:</p>
        <input
          type='text'
          id='height'
          placeholder='Height'
          ref={(input) => {_height = input;}}/>
        <p>Width:</p>
        <input
          type='text'
          id='width'
          placeholder='Width'
          ref={(input) => {_width = input;}}/>
        <p>Price:</p>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <br />
        <br />
        <button type='submit'>Add Work</button>
      </form>
    </div>
  );
}

AddWork.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(AddWork);
