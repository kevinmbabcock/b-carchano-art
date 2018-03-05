import React from 'react';
import WorkDetails from './WorkDetails';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function Works(props){

  var img.centerWorkImage = {
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div>
      <p>{props.worksList.img}</p>
      {Object.keys(props.worksList).map(function(workId) {
        var work  = props.worksList[workId];
        return (
          <div className='img.centerWorkImage'>
              <img src={work.img} alt='photo'></img>
          </div>
        );}
      )}
    </div>
  );
}

Works.propTypes = {
  worksList: PropTypes.object
};

export default Works;
