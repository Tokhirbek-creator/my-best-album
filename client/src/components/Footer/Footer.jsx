import React from 'react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">

        <div className="footer__content">
          <h3 className="footer__title">Social</h3>

          <ul className="footer__social">
            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="bx bxl-facebook" />
            </a>

            <a href="https://twitter.com/" target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="bx bxl-twitter" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="bx bxl-instagram" />
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">&#169; karamattov. All rigths reserved</span>
    </footer>
  );
}

export default Footer;
