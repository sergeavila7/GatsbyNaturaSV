import React from 'react';
import '../assets/styles/styles.scss';
import SEO from '../components/seo';
import Banner from '../components/banner';
import ReactPlayer from 'react-player';
import Video from '../assets/images/Holbox1.mp4';
import Businnes from '../assets/images/businnes.svg';
// markup
const IndexPage = () => (
  <>
    <SEO title='Home' />
    <div className='video'>
      <ReactPlayer
        url={Video}
        playing={true}
        controls={false}
        muted={true}
        loop={true}
        width='100%'
        height='50%'
      />
    </div>

    <section className='presentation'>
      <Banner
        img={Businnes}
        title='!Inscribete Ya¡'
        description={
          <div className='banner__home'>
            <p className='text-center'>
              Conviertete en dueño de tu propio negocio.
            </p>
            <ul>
              <li>No necesitas de inversión</li>
              <li>Genera ingresos y si ya tienes duplicalos</li>
              <li>Trabaja desde la comodidad de tu hogar</li>
              <li>Sin jornadas laborales</li>
            </ul>
            <p className='text-center'>
              No pierdas la oportunidad de cambiar tu vida con Natura Red Omega.
            </p>
          </div>
        }
      />
    </section>
  </>
);

export default IndexPage;
