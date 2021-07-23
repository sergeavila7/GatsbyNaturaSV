import React from 'react';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import BannerBenefits from '../assets/images/benefits.svg';
import Businnes from '../assets/images/businnes.svg';
import Money from '../assets/images/money.svg';
import Travels from '../assets/images/travels.svg';
import Car from '../assets/images/car.svg';
import Products from '../assets/images/products.svg';
import Events from '../assets/images/events.svg';
import Rewards from '../assets/images/rewards.svg';
import '../assets/styles/styles.scss';
// markup
const Benefits = () => (
  <>
    <SEO title='Benefits' />
    <section className='banner__benefits'>
      <Banner
        img={BannerBenefits}
        title='Beneficios'
        description='Tienes la oportunidad de ganar viajes nacionales y
                internacionales, campañas especiales, entrenamientos exclusivos,
                joyas, autos y mucho más...'
      />
    </section>
    <section className='cards'>
      <div className='container-fluid mt-5'>
        <div className='container-sm'>
          <h2>
            <span>Natura te ofrece</span>
          </h2>
        </div>
        <div className='container__cards'>
          <Cards
            img={Money}
            title='Dinero'
            description='Natura Red Omega te ayuda a duplicar tus ingresos.'
          />
          <Cards
            img={Travels}
            title='Viajes'
            description='Natura Red Omega te lleva a conocer las mejores playas de México.'
          />
          <Cards
            img={Car}
            title='Autos'
            description='Natura Red Omega te da la oportunidad de ganar un auto último modelo.'
          />
          <Cards
            img={Products}
            title='Productos'
            description='Obten increibles descuentos y productos GRATIS!!!'
          />
          <Cards
            img={Events}
            title='Eventos'
            description='Obten increibles descuentos y productos GRATIS!!!.'
          />
          <Cards
            img={Rewards}
            title='Premios'
            description='Obten increibles descuentos y productos GRATIS!!!.'
          />
        </div>
      </div>
    </section>
  </>
);

export default Benefits;
