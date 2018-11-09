import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ContactVerification(props) {
  return (
    <div>
      <p>Thank you for your submission! The artist will be in touch with you soon!</p>
      <p>Click <Link to="/"><span onClick={props.onExitConfirmation}>here</span></Link> to return to the home page</p>
    </div>
  );
}

ContactVerification.propTypes = {
  onExitConfirmation: PropTypes.func
};

export default ContactVerification;
