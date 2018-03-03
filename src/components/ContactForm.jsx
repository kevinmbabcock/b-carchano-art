import React from 'react';
import PropTypes from 'prop-types';

function ContactForm(props){
  let _name;
  let _email;
  let _inquiry;

  return (
    <div>
      <h4>Please fill out the form to contact the artist</h4>
      <form onSubmit={props.onFormSubmission}>
        <p>Name:</p>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>
        <br />
        <p>Email:</p>
        <input
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
        <br />
        <p>Inquiry:</p>
        <textarea
          id='inquiry'
          ref={(textarea) => {_inquiry = textarea;}}/>
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
