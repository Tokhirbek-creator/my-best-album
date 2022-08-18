import React from 'react';
import './card.scss';

function Card() {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">
        Photos
      </h2>

      <div className="featured__container grid">
        <article className="featured__card">

          <img src="assets/img/gallery.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Paris</h3>
          </div>

          <button type="button" className="button featured__button">Delete</button>
        </article>

        <article className="featured__card">

          <img src="assets/img/gallery.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">My cat</h3>
          </div>

          <button type="button" className="button featured__button">Delete</button>
        </article>

        <article className="featured__card">

          <img src="assets/img/gallery.jpg" alt="" className="featured__img" />

          <div className="featured__data">
            <h3 className="featured__title">Rollse-Royce</h3>
          </div>

          <button type="button" className="button featured__button">Delete</button>
        </article>
      </div>
    </section>
  );
}

export default Card;
