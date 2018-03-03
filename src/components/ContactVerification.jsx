import React from 'react';
import PropTypes from 'prop-types';

function ContactVerification(props) {
  return (
    <div>
      <p>Thank you for your submission! The artist will be in touch with you soon!</p>
      <button onClick={props.onExitConfirmation}>Home</button>
    </div>
  );
}

ContactVerification.propTypes = {
  onExitConfirmation: PropTypes.func
}

export default ContactVerification;
