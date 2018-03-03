import React from 'react';
import WorksList from './Works';
import constants from './../constants';

function Carousel(){
  return (
    <div>
      {Object.keys(constants.initialState.worksList).map(function(workId) {
        var work = constants.initialState.worksList[workId];
        if (work.featured) {
          return (
            <div>
              <p>{work.img}</p>
            </div>
          )
        }
      }
    )}
    </div>
  );
}

export default Carousel;
