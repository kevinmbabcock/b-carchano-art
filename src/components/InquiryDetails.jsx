import React from 'react';
import PropTypes from 'prop-types';

function InquiryDetails(props){
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Inquiry:</p>
      <div className='container'>
        <p>{props.inquiry}</p>
      </div>
    </div>
  );
}

InquiryDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  inquiry: PropTypes.string
};

export default InquiryDetails;
