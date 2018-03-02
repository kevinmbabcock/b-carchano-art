import React from 'react';
import AddWork from './AddWork';
import WorksListContainer from './WorksListContainer';
import EditBio from './EditBio';
import InquiriesListContainer from './InquiriesListContainer';

function Admin(){
  return (
    <div>
      <p>Admin component has loaded</p>
      <AddWork />
      <WorksListContainer />
      <EditBio />
      <InquiriesListContainer />
    </div>
  );
}

export default Admin;
