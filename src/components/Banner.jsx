import React from 'react';

const Banner = (props) => {
  return (
    <div className='banner mx-auto'>
      <div className='banner__image col-lg-6 col-12'>
        <img src={props.img} />
      </div>
      <div className='banner__info col-lg-6 col-12'>
        <h2>
          <span>{props.title}</span>
        </h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Banner;
