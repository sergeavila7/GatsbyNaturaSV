import React from 'react';

const Cards = (props) => {
  return (
    <>
      <div className='card'>
        <div className='container__img'>
          <img src={props.img} />
        </div>
        <div className='card__body'>
          <h2><span>{props.title}</span></h2>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
