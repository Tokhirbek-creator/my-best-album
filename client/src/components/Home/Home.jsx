/* eslint-disable react/button-has-type */
import React from 'react';
import './home.scss';

function Home() {
  return (
    <main className="main">
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <img src="assets/img/gallery.jpg" alt="" className="home__img" />
          </div>

          <div className="home__data">
            <h1 className="home__title">
              My
              {' '}
              <br />
              {' '}
              Gallery
            </h1>
            <p className="home__description">
              This is where all my photos and descriptions are saved in the album.
            </p>

            <div className="home__btns">
              <button className="button home__button">ADD PHOTO TO ALBUM</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
