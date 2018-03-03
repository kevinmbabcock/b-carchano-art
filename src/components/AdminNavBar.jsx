import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavBar(){
  return (
    <div>
      <p>Admin Tools:</p>
      <Link to='/admin/add-work'>Add Work</Link> | <Link to='/admin/edit-work'>Edit Work</Link> | <Link to='/admin/edit-bio'>Edit Bio</Link> | <Link to='/admin/inquiries'>View Inquiries</Link>
    </div>
  );
}

export default AdminNavBar;
