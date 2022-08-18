import React, { memo } from 'react';
import './card.scss';
import Photo from './Photo/Photo';

function Card({ photos, setPhotos }) {
  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">
        Photos
      </h2>

      <div className="featured__container grid">
        {photos.map((photo) => (
          <Photo id={photo.id} title={photo.title} img={photo.img} setPhotos={setPhotos} />
        ))}
      </div>
    </section>
  );
}

export default memo(Card);
