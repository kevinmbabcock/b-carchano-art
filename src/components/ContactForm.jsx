import React from 'react';

function ContactForm(){
  return (
    <div>
      <h4>Please fill out the form to contact the artist</h4>
      <form>
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
          ref={(input) => {_email = textarea;}}/>
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

export default ContactForm;
