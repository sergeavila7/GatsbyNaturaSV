import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="container__info">
        <h2>SaraVG</h2>
        <p>Lider Natura</p>
        </div>
          <div className='container__socials'>
            <div className='container__icons'>
            <div className="icon">
              <i>
                <FaFacebook />
              </i>
            </div>
            <a>Facebook</a>
          </div>
            <div className='container__icons'>
            <div className="icon">
              <i>
                <FaInstagram/>
              </i>
            </div>
            <a>Instagram</a>
          </div>
        
            </div>
       
        </div>
      <div className='development d-lg-block d-none text-center'>
        ©Desarrollador SJAV 2021 🐱‍👤 | Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
