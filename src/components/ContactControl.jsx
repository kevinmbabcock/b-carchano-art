import React from 'react';
import ContactForm from './ContactForm';
import ContactVerification from './ContactVerification';
import InstagramLink from './InstagramLink';
import ShippingCost from './ShippingCost';

function ContactControl(){
  return (
    <div>
      <p>ContactControl component has loaded</p>
      <ContactForm />
      <ContactVerification />
      <InstagramLink />
      <ShippingCost />
    </div>
  );
}

export default ContactControl;
