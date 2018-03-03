import React from 'react';
import WorksList from './WorksList';
import constants from './../constants';

function WorksListContainer() {
  return (
    <div>
      <WorksList worksList={constants.initialState.worksList}/>
    </div>
  );
}

export default WorksListContainer;
