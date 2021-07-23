import React from 'react';
const Contact = () => {
  return (
    <div
      className='container__contact
        '
    >
      <ul>
        <li>
          <a href='tel:+525529604681' className='phone'>
            <i className='fas fa-phone-alt'></i>
          </a>
        </li>
        <li>
          <a
            href='https://wa.me/525529604681/?text=Natura Red Omega'
            className='wp'
          >
            <i className='fab fa-whatsapp'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
