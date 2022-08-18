import React, { memo } from 'react';
import './card.scss';

function Card({ photos }) {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">
        Photos
      </h2>

      <div className="featured__container grid">
        {photos.map((photo) => (

          <article key={photo.id} className="featured__card">

            <img src={`http://localhost:3001${photo.img}`} alt="" className="featured__img" />

            <div className="featured__data">
              <h3 className="featured__title">{photo.title}</h3>
            </div>

            <button id={photo.id} type="button" className="button featured__button">Delete</button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default memo(Card);
