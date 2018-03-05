import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

  var navBarStyles = {
    textAlign: 'center',
    color: '#8c8c8c',
    marginBottom: '30px'
  };

  return (
    <div style={{marginBotton: '30px'}}>
      <div className='row'>
        <div className='col-sm-1'>
        </div>
        <div className='col-sm-2'>
          <Link style={navBarStyles} to='/'>Home</Link>
        </div>

        <div className='col-sm-2'>
          <Link style={navBarStyles} to='/works'>Works</Link>
        </div>

        <div className='col-sm-2'>
          <Link style={navBarStyles} to='/about'>About</Link>
        </div>

        <div className='col-sm-2'>
          <Link style={navBarStyles} to='/contact'>Contact</Link>
        </div>

        <div className='col-sm-2'>
          <Link style={navBarStyles} to='/admin'>Admin</Link>
        </div>
        <div className='col-sm-1'>

        </div>
        <div className='col-sm-1'>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}

export default Navbar;
