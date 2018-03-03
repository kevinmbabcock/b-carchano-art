import React from 'react';
import Inquiry from './Inquiry';
import PropTypes from 'prop-types';

function InquiriesList(props){
  return (
    <div>
      <Inquiry inquiriesList={props.inquiriesList}/>
    </div>
  );
}

InquiriesList.propTypes = {
  inquiriesList: PropTypes.object
}

export default InquiriesList;
