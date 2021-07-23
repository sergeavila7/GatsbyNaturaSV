import React from 'react';
import Form from '../components/Form';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import ContactUs from '../assets/images/contact-us.svg';
import CardRequirements from '../components/CardsRequirements';
import { HiOutlineIdentification, HiHome } from 'react-icons/hi';

import '../assets/styles/styles.scss';

// markup
const Contact = () => (
  <>
    <SEO title='Contact' />
    <section className='banner__contact'>
      <Banner
        img={ContactUs}
        title='Requisitos'
        description={
          <div className='container__cards--requirements pt-2'>
            <ul>
              <CardRequirements
                icon={<HiOutlineIdentification />}
                title='INE'
              />
              <CardRequirements
                icon={<HiHome />}
                title='Comprobante de Domicilio'
              />
            </ul>
          </div>
        }
      />
    </section>

    <section className='form'>
      <h3>Contactanos</h3>
      <div className='container'>
        <Form />
      </div>
    </section>
  </>
);

export default Contact;
