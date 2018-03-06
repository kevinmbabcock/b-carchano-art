import React from 'react';
import WorkDetails from './WorkDetails';
import PropTypes from 'prop-types';

function Works(props){

  var centerWorkImage = {
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div>
      <p>{props.worksList.img}</p>
      {Object.keys(props.worksList).map(function(workId) {
        var work  = props.worksList[workId];
        return (
          <div>
            <div className='centerWorkImage'>
                <img src={work.img} alt='photo'></img>
            </div>
            <div>
              <WorkDetails
                title={work.title}
                medium={work.medium}
                description={work.description}
                height={work.height}
                width={work.width}
                price={work.price}
                forSale={work.forSale}
                key={workId} />
            </div>
          </div>
        );}
      )}
    </div>
  );
}

Works.propTypes = {
  worksList: PropTypes.object
};

export default Works;
