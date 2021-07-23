import React from 'react';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import BannerAbout from '../assets/images/about.svg';

import CarouselContainer from '../components/CarouselContainer';
import '../assets/styles/styles.scss';
// import Omega from "../images/OMEGA.png"

const About = () => {
  return (
    <>
      <SEO title='About' />
      <section className='banner__about'>
        <Banner
          img={BannerAbout}
          title='¿Qué es Natura Red Omega?'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis pharetra lorem, non consequat lectus. Sed ullamcorper vel nunc a laoreet. Integer in maximus augue. Nam id enim sem. Fusce porttitor pellentesque quam eget consequat. Morbi luctus, lacus ac volutpat dapibus, ligula nibh congue risus, sit amet consequat libero turpis quis purus. Morbi gravida felis massa, id malesuada erat pretium eu. Nunc auctor ante non congue commodo. Vestibulum ullamcorper enim in est tincidunt, sit amet laoreet justo bibendum. Pellentesque lacinia turpis eu mi iaculis, vestibulum suscipit risus luctus'
        />
      </section>

      <section className='about__natura'>
        <div className='container'>
          <div class='row justify-content-center align-items-center'>
            <div className='about__natura--img col-lg-6'>
              <img src='https://www.milenio.com/uploads/media/2021/06/17/natura-fuerza-ventas-formada-mil.jpeg' />
            </div>
            <div className='about__natura--description col-lg-6 bg-light'>
              <h2 className='text-center mt-2'>Consultor</h2>
              <p>
                Ser Consultor Natura es comenzar tu camino como emprendor,
                encantando a tus clientes con los Rituales de producto
                acercandonos al "Bien estar bien".
              </p>

              <h4>Obten beneficios como:</h4>
              <ul>
                <li>
                  Programa de
                  <strong> Reconocimiento exclusivo</strong>
                </li>
                <li>
                  Plataforma Virtual de <strong>Formacion</strong>
                </li>
                <li>
                  Tallers con especialistas de
                  <strong> producto, negocio y desarrollo</strong>
                </li>
                <li>
                  Gana<strong> Campañas, productos y regalos especiales</strong>
                </li>
                <li>
                  Ganancias de hasta el
                  <strong>150%</strong>
                  por la venta de producto
                </li>
              </ul>
            </div>
            <div class='row flex-row-reverse justify-content-center align-items-center '>
              <div className='about__natura--img col-lg-6 '>
                <img src='https://www.eadic.com/wp-content/uploads/2019/07/liderazgo_equipos-680x510.jpg' />
              </div>
              <div className='about__natura--description col-lg-6 bg-light'>
                <h2 className='text-center mt-2'>Líder</h2>
                <p>
                  Ser Líder Natura es expandir tu emprendimiento, desarrollarte
                  en el manejo de personas, gestión de equipo, liderazgo y
                  comunicación, transformando tu vida y la de los demás.
                </p>
                <ul>
                  <li>
                    Por cada persona que invites a transformas su vida inicas
                    <strong> ganando $1,650</strong>
                  </li>
                  <h4>Plan 5x5</h4>
                  <li>
                    Invitando a 5 personas nuevas cada ciclo a comenzar su
                    negocio Natura y dandoles seguimiento podras ganar más de{' '}
                    <strong>$29,000 </strong>
                    en 3 meses y medio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section classname='testimonials'>
        <div className='container-sm'>
          <CarouselContainer />
        </div>
      </section>
    </>
  );
};

export default About;
