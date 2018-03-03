import React from 'react';
import InquiryDetails from './InquiryDetails';
import PropTypes from 'prop-types';

function Inquiry(props){
  return (
    <div>
      {Object.keys(props.inquiriesList).map(function(inquiryId) {
        var inquiry = props.inquiriesList[inquiryId];
        return (
          <div>
            <InquiryDetails
              name={inquiry.name}
              email={inquiry.email}
              inquiry={inquiry.inquiry} />
            <br />
          </div>
        )}
      )}
    </div>
  );
}

export default Inquiry;
