import React from 'react';
import WorkDetails from './WorkDetails';
import PropTypes from 'prop-types';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function Works(props){
  return (
    <div>
      <p>{props.worksList.img}</p>
      {Object.keys(props.worksList).map(function(workId) {
        var work  = props.worksList[workId];
        return (
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
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='col-sm-2'>
                <PrevButton />
              </div>
              <div className='col-sm-2'>
                <NextButton />
              </div>
              <div className='col-sm-4'></div>
            </div>
            <br />
            <br />
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
