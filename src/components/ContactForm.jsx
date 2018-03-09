import React from 'react';
import PropTypes from 'prop-types';

function ContactForm(props){
  let _firstName;
  let _lastName;
  let _email;
  let _subject;
  let _message;

  var textStyle = {
    color: '#8c8c8c'
  };

  return (
    <div style={textStyle}>
      <h4>Please fill out the form to contact the artist</h4>
      <form onSubmit={props.onFormSubmission}>
        <div className='row'>
          <div className='col-md-3'>
            <p>First Name:</p>
            <input
              type='text'
              id='fistName'
              placeholder='First Name'
              ref={(input) => {_firstName = input;}}/>
          </div>
          <div className='cole-md-3'>
            <p>Last Name:</p>
            <input
              type='text'
              id='lastName'
              placeholder='Last Name'
              ref={(input) => {_lastName = input;}}/>
          </div>
        </div>
        <br />
        <p>Email:</p>
        <input
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
        <br />
        <p>Subject</p>
        <input
          id='subject'
          placeholder='Subject'
          ref={(input) => {_subject = input;}}/>
        <p>Message:</p>
        <textarea
          id='message'
          ref={(textarea) => {_message = textarea;}}/>
        <br />
        <br />
        <button type='submit'>Submit Request</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  onFormSubmission: PropTypes.func
}

export default ContactForm;
