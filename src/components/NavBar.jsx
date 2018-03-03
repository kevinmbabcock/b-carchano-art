import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){

  var localStyle = {
    textAlign: 'center',
    color: '#8c8c8c',
    marginBottom: '30px'
  }

  return (
    <div style={localStyle}>
      <Link to='/'>Home</Link>  |  <Link to='/works'>Works</Link>  |  <Link to='/about'>About</Link>  |  <Link to='/contact'>Contact</Link>  |  <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default Navbar;
