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
              inquiry={inquiry.inquiry}
              key={inquiryId} />
            <br />
          </div>
        );}
      )}
    </div>
  );
}

Inquiry.propTypes = {
  inquiriesList: PropTypes.object
};

export default Inquiry;
