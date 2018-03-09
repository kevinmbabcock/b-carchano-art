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
              firstName={inquiry.firstName}
              lastName={inquiry.lastName}
              email={inquiry.email}
              subject={inquiry.subject}
              message={inquiry.message}
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
