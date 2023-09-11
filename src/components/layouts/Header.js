import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from '@emotion/styled';

const ContainerHeader = styled.div`
  display: flex;
  justify-content: center;
`;

function Header({ light }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener('click', function (e) {
    if (e.target.closest('.content-3')) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? 'desktop-header-3 fixed-top light'
          : 'desktop-header-3 fixed-top'
      }
    >
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <button
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='navbar-toggler'
            data-target='#navbarNavDropdown'
            data-toggle='collapse'
            type='button'
            onClick={handleMobilenav}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <ContainerHeader
            className={
              toggleNavbar
                ? 'collapse navbar-collapse show'
                : 'collapse navbar-collapse'
            }
            id='navbarNavDropdown'
          >
            <ul className='navbar-nav ml-auto scrollspy'>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='/#section-home'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='section-about'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Acerca
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='section-experiences'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Experiencia
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='section-services'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Servicios
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='section-blogs'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  activeclass='active'
                  className='nav-link'
                  to='section-contact'
                  spy={true}
                  smooth={true}
                  duration={300}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </ContainerHeader>
        </nav>
      </div>
    </header>
  );
}

export default Header;
