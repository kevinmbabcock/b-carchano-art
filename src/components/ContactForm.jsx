import React from 'react';

function ContactForm(){
  return (
    <div>
      <h4>Please fill out the form to contact the artist</h4>
      <form>
        <p>Title:</p>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_author = input;}}/>
        <br />
        <br />
        <p>Medium:</p>
        <input
          id='medium'
          placeholder='Medium'
          ref={(textarea) => {_content = textarea;}}/>
        <br />
        <br />
        <p>Description:</p>
        <textarea
          id='description'
          placeholder="Add Description Here....."
          ref={(textarea) => {_content = textarea;}}/>
        <p>Height:</p>
        <input
          type='text'
          id='height'
          placeholder='Height'
          ref={(input) => {_tags = input;}}/>
        <p>Width:</p>
        <input
          type='text'
          id='width'
          placeholder='Width'
          ref={(input) => {_tags = input;}}/>
        <p>Price:</p>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_tags = input;}}/>
        <br />
        <br />
        <button type='submit'>Add Work</button>
      </form>
    </div>
  );
}

export default ContactForm;
