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

  var componentStyle = {
    color: '#8c8c8c',
    margin: 50,
    fontFamily: 'cursive',
    color: '#8c8c8c'
  };
  
  var textBoxStyle = {
    marginLeft: 20,
    marginBottom: 20
  };
  
  var labelStyle = {
    paddingBottom: 0
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
    <div style={componentStyle}>
      <h4 style={{marginBottom: 50, textAlign: 'center'}}>Please fill out the form to contact the artist</h4>
      <form onSubmit={handleContactFormSubmission}>
        <div className='row'>
          <div className='col-md'>
            <p style={labelStyle}>First Name:</p>
            <input
              type='text'
              id='firstName'
              style={textBoxStyle}
              ref={(input) => {_firstName = input;}}/>
          </div>
          <div className='col-md'>
            <p style={labelStyle}>Last Name:</p>
            <input
              type='text'
              id='lastName'
              style={textBoxStyle}
              ref={(input) => {_lastName = input;}}/>
          </div>
        </div>
        <p style={labelStyle}>Email:</p>
        <input
          id='email'
          style={textBoxStyle}
          ref={(input) => {_email = input;}}/>

        <p style={labelStyle}>Subject</p>
        <input
          id='subject'
          style={{width: "300px"}, textBoxStyle}
          ref={(input) => {_subject = input;}}/>
        <p style={labelStyle}>Message:</p>
        <textarea
          id='message'
          style={textBoxStyle}
          placeholder="It's a good thing you're pretty... ;)"
          style={textBoxStyle, {width: "500px", height: "200px"}}
          ref={(textarea) => {_message = textarea;}}/>
        <br />
        <br />
        <button type='submit' style={{backGroundColor: 'none'}}>Submit Request</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(ContactForm);
