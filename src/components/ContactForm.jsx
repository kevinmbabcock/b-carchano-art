import React from 'react';
import PropTypes from 'prop-types';

function ContactForm(props){
  let _firstName;
  let _lastName;
  let _email;
  let _subject;
  let _message;

  return (
    <div>
      <h4>Please fill out the form to contact the artist</h4>
      <form onSubmit={props.onFormSubmission}>
        <p>First Name:</p>
        <input
          type='text'
          id='fistName'
          placeholder='First Name'
          ref={(input) => {_firstName = input;}}/>
        <p>Last Name:</p>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          ref={(input) => {_lastName = input;}}/>
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
