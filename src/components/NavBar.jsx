import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

  var navBarStyles = {
    textAlign: 'center',
    color: '#8c8c8c',
    marginBottom: '30px'
  };

  return (
    <div style={navBarStyles}>
      <div className='row'>
        <div className='col-sm-1'>
        </div>
        <div className='col-sm-1'>
          <Link to='/'>Home</Link>
        </div>
        <div className='col-sm-1'>
          <p> | </p>
        </div>
        <div className='col-sm-1'>
          <Link to='/works'>Works</Link>
        </div>
        <div className='col-sm-1'>
          <p> | </p>
        </div>
        <div className='col-sm-1'>
          <Link to='/about'>About</Link>
        </div>
        <div className='col-sm-1'>
          <p> | </p>
        </div>
        <div className='col-sm-1'>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='col-sm-1'>
          <p> | </p>
        </div>
        <div className='col-sm-1'>
          <Link to='/admin'>Admin</Link>
        </div>
        <div className='col-sm-1'>

        </div>
        <div className='col-sm-1'>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
