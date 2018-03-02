import React from 'react';
import Contact from './Contact';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function WorkDetails(){
  return (
    <div>
      <p>WorkDetails component has loaded</p>
      <Contact />
      <PrevButton />
      <NextButton />
    </div>
  );
}

export default WorkDetails;
