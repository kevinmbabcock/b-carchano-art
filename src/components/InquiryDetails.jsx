import React from 'react';
import PropTypes from 'prop-types';

function InquiryDetails(props){
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.inquiry}</p>
    </div>
  );
}

InquiryDetails.propTypes = {
  name: PropTypes.string,
  email: PropTypes.sring,
  inquiry: PropTypes.inquiry
}

export default InquiryDetails;
