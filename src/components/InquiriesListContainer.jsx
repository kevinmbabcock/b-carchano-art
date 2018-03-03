import React from 'react';
import InquiriesList from './InquiriesList';
import constants from './../constants';

function InquiriesListContainer(){
  return (
    <div>
      <InquiriesList inquiriesList={constants.initialState.inquiriesList}/>
    </div>
  );
}

export default InquiriesListContainer;
