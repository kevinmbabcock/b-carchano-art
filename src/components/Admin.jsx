import React from 'react';
import AdminNavBar from './AdminNavBar';
import AddWork from './AddWork';
import WorksListContainer from './WorksListContainer';
import EditBio from './EditBio';
import InquiriesListContainer from './InquiriesListContainer';
import { Switch, Route, withRouter } from 'react-router-dom';

function Admin(){
  return (
    <div>
      <AdminNavBar />
      <AddWork />
      <WorksListContainer />
      <EditBio />
      <InquiriesListContainer />
    </div>
  );
}

export default Admin;
