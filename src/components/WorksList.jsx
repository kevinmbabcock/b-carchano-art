import React from 'react';
import Works from './Works';
import EditCarousel from './EditCarousel';

function WorksList(){
  return (
    <div>
      <p>WorksList component has loaded</p>
      <Works />
      <EditCarousel />
    </div>
  );
}

export default WorksList;
