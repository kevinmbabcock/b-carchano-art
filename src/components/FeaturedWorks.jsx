import React from 'react';
import constants from './../constants';

function FeaturedWorks() {
  return (
    <div>
      {Object.keys(constants.initialState.worksList).map(function(workId) {
        var work = constants.initialState.worksList[workId];
        if (work.featured) {
          return (
            <div>
              <img src={work.img} alt='photo'></img>
            </div>
          );
        }
      }
      )}
    </div>
  );
}

export default FeaturedWorks;
