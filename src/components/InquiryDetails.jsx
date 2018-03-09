import React from 'react';
import PropTypes from 'prop-types';

function InquiryDetails(props){
  return (
    <div>
      <p>Name: {props.firstName} {props.lastName}</p>
      <p>Email: {props.email}</p>
      <p>Subject: {props.subject}</p>
      <p>Message:</p>
      <div className='container'>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

InquiryDetails.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  subject: PropTypes.string,
  message: PropTypes.string
};

export default InquiryDetails;
