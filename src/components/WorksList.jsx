import React from 'react';
import Works from './Works';
import PropTypes from 'prop-types';

function WorksList(props){
  return (
    <div>
      <Works worksList={props.worksList}/>
    </div>
  );
}

WorksList.propTypes = {
  worksList: PropTypes.object
}

export default WorksList;
