import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Error404(props) {
  return (
    <div>
      <h6>The page "mycustomurl.com/{props.location.pathname}" does not exist!</h6>
      <h6>Would you like to return <Link to="/">home</Link> instead?</h6>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
