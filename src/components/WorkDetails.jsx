import React from 'react';
import ContactControl from './ContactControl';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function WorkDetails(){
  return (
    <div>
      <p>WorkDetails component has loaded</p>
      <ContactControl />
      <PrevButton />
      <NextButton />
    </div>
  );
}

export default WorkDetails;
