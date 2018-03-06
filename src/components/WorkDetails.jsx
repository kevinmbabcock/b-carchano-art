import React from 'react';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function WorkDetails(props){

  var workDetailsStyles = {
    textAlign: 'center'
  };

  return (
    <div>
      <div style={workDetailsStyles} >
        <h5>{props.title}</h5>
        <p>Medium: {props.medium}</p>
        <p>{props.description}</p>
        <p>{props.height} x {props.width} (inches)</p>
        <p>${props.price}</p>
      </div>
      <div className='row' class>
        <PrevButton />
        <NextButton />
      </div>
    </div>

  );
}

WorkDetails.propTypes = {
  title: PropTypes.string,
  medium: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  price: PropTypes.number
};

export default WorkDetails;
