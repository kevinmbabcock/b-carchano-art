import React from 'react';

function Header(){
  var textStyle = {
    textAlign: 'center',
    fontFamily: 'cursive',
    color: '#8c8c8c'
  }

  var headerStyle = {
    backgroundColor: '#ffffff',
    marginTop: '50px',
    marginBottom: '40px'
  }

  return (
    <div style={headerStyle}>
      <h1 style={textStyle}>B.Carchano Art</h1>
    </div>
  );
}

export default Header;
