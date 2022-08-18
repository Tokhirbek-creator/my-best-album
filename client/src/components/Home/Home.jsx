/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import './home.scss';

function Home({ handleSubmit, handleInputs, me }) {
  return (
    <main className="main">
      <section className="home" id="home">
        <div className="home__container container grid">
          <div className="home__img-bg">
            <img src="assets/img/gallery.jpg" alt="" className="home__img" />
          </div>

          <div className="home__data">
            <p className="home__description">
              My name is
            </p>
            <h1 className="home__title">
              {me.name}
              {' '}
              {me.surname}
              <br />
              <br />
              My
              {' '}
              <br />
              {' '}
              Best Album
            </h1>
            <p className="home__description">
              This is where all my photos and descriptions are saved in the album.
            </p>
            <div className="home__btns">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  onChange={handleInputs}
                  htmlFor="titleinput"
                  placeholder="Description"
                  className="about__input"
                />
                <input
                  type="file"
                  name="file"
                  onChange={handleInputs}
                  htmlFor="fileInput"
                  id="file"
                />
                <label htmlFor="file" className="btn-1">upload file</label>
                <button type="submit" className="button home__button">ADD PHOTO TO ALBUM</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default memo(Home);
