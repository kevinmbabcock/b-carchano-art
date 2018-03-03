import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/works'>Works</Link> | <Link to='/about'>About</Link>| <Link to='/contact'>Contact</Link> | <Link to='/admin'>Admin</Link>
    </div>
  );
}

export default Navbar;
