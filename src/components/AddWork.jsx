import React from 'react';

function AddWork(){
  let _title;
  let _medium;
  let _description;
  let _height;
  let _width;
  let _price;
  let _forSale;
  let _featured;
  let _img;

  return (
    <div>
      <h5>Fill out form to add a new work</h5>
      <form>
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

export default AddWork;
