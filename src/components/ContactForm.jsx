import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { types } from './../constants';
import { addInquiry } from './../actions';

function ContactForm(props){
  let _firstName;
  let _lastName;
  let _email;
  let _subject;
  let _message;

  var textStyle = {
    color: '#8c8c8c'
  };

  function handleContactFormSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    dispatch(addInquiry(_firstName.value, _lastName.value, _email.value, _subject.value, _message.value));
    console.log('form submitted');
    _firstName.value = '';
    _lastName.value = '';
    _email.value = '';
    _subject.value = '';
    _message.value = '';
  }

  return (
    <div style={textStyle}>
      <h4>Please fill out the form to contact the artist</h4>
      <form onSubmit={handleContactFormSubmission}>
        <div className='row'>
          <div className='col-md-3'>
            <p>First Name:</p>
            <input
              type='text'
              id='firstName'
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
          placeholder="Type message here..."
          style={{width: "500px", height: "200px"}}
          ref={(textarea) => {_message = textarea;}}/>
        <br />
        <br />
        <button type='submit'>Submit Request</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(ContactForm);
