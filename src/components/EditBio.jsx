import React from 'react';

function EditBio(){
  // let _bio;

  return (
    <div>
      <form>
        <p>Add a new Bio:</p>
        <textarea
          id='bio'
          ref={(textarea) => {_bio = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default EditBio;
