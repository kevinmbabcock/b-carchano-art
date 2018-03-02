import React from 'react';
import ContactForm from './ContactForm';
import ContactVerification from './ContactVerification';
import InstagramLink from './InstagramLink';
import ShippingCost from './ShippingCost';

function Contact(){
  return (
    <div>
      <p>Contact component has loaded</p>
      <ContactForm />
      <ContactVerification />
      <InstagramLink />
      <ShippingCost />
    </div>
  );
}

export default Contact;
