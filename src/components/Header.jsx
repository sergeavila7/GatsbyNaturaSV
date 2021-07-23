import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaHome, FaUsers, FaPhoneSquareAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdContactPhone } from 'react-icons/md';
import { Link } from 'gatsby';
import Logo from '../assets/images/naturalogo.png';

const Header = () => {
  const SIZE = '32px';

  return (
    <header className='header'>
      <Navbar className='navbar'>
        <Container className='logo__container'>
          <Navbar.Brand>
            <Link to='/'>
              <img src={Logo} alt={Logo} />
            </Link>
          </Navbar.Brand>
        </Container>
        <Nav className='menu d-none d-lg-flex'>
          <Link to='/'>Inicio</Link>
          <Link to='/about'>Nosotros</Link>
          <Link to='/benefits'>Beneficios</Link>
          <Link to='/contact'>Contacto</Link>
        </Nav>
        {/*MENU RESPONSIVE*/}
        <Nav className='menu-responsive d-lg-none'>
          <div className='home'>
            <Link className='home' to='/'>
              <FaHome size={SIZE} />
            </Link>
          </div>
          <div className='about'>
            <Link className='about' to='/about'>
              <FaUsers size={SIZE} />
            </Link>
          </div>
          <div className='benefits'>
            <Link className='benefits' to='/benefits'>
              <GiReceiveMoney size={SIZE} />
            </Link>
          </div>
          <div className='contact'>
            <Link to='/contact'>
              <MdContactPhone size={SIZE} />
            </Link>
          </div>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
