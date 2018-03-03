import React from 'react';
import AdminNavBar from './AdminNavBar';
import AddWork from './AddWork';
import WorksListContainer from './WorksListContainer';
import EditBio from './EditBio';
import InquiriesListContainer from './InquiriesListContainer';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';

function Admin(){
  return (
    <div>
      <AdminNavBar />
      <Switch>
        <Route path='/admin/add-work' component={AddWork} />
        <Route path='/admin/edit-work' component={WorksListContainer} />
        <Route path='/admin/edit-bio' component={EditBio} />
        <Route path='/admin/inquiries' component={InquiriesListContainer} />
      </Switch>
    </div>
  );
}

export default Admin;
