import React from 'react';
import WorkDetails from './WorkDetails';
import EditWorkDetails from './EditWorkDetails';

function Works(){
  return (
    <div>
      <p>Works component has loaded</p>
      <WorkDetails />
      <EditWorkDetails />
    </div>
  );
}

export default Works;
