import React from 'react';
import PropTypes from 'prop-types';

function WorkDetails(props){

  var localStyles = {
    textAlign: 'center'
  }

  return (
    <div style={localStyles}>
      <h5>{props.title}</h5>
      <p>Medium: {props.medium}</p>
      <p>{props.description}</p>
      <p>{props.height} x {props.width} (inches)</p>
      <p>${props.price}</p>
    </div>

  );
}

WorkDetails.propTypes = {
  title: PropTypes.string,
  medium: PropTypes.string,
  description: PropTypes.description,
  height: PropTypes.number,
  width: PropTypes.number,
  price: PropTypes.number
}

export default WorkDetails;
