import React from 'react';
import ContactForm from './ContactForm';
import ContactVerification from './ContactVerification';
import InstagramLink from './InstagramLink';

function Contact(){
  return (
    <div>
      <p>Contact component has loaded</p>
      <ContactForm />
      <ContactVerification />
    </div>
  );
}

export default Contact;
