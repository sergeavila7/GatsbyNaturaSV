import React from 'react';

const CardsRequirements = (props) => {
  return (
    <div className='card__requirements'>
      <i className='mx-auto'>{props.icon}</i>
      <p className='mx-auto'>{props.title}</p>
    </div>
  );
};

export default CardsRequirements;
