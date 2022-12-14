import React, { useEffect } from 'react';
import './navbar.scss';

function Navbar() {
  useEffect(() => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLink = document.querySelectorAll('.nav__link');
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }

    const linkAction = () => {
      const navMenus = document.getElementById('nav-menu');
      navMenus.classList.remove('show-menu');
    };
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    const scrollHeader = () => {
      const header = document.getElementById('header');
      window.scrollY >= 50 ? header.classList.add('scroll-header')
        : header.classList.remove('scroll-header');
    };
    window.addEventListener('scroll', scrollHeader);
  });

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <i className="bx bx-photo-album" />
          {' '}
          My Best Album
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#featured" className="nav__link">Photos</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x" />
          </div>
        </div>

        <div className="nav__btns">
          <i className="bx bx-moon change-theme" id="theme-button" />

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt" />
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
