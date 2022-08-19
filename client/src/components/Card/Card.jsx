import React, { memo, useState } from 'react';
import './card.scss';
import Photo from './Photo/Photo';

function Card({ photos, setPhotos }) {
  const [value, setValue] = useState(false);
  const buttonClick = () => {
    const sorted = photos.reverse();
    setValue(!value);
    if (value) {
      setPhotos(sorted);
    }
  };

  return (
    <section className="featured section container" id="featured">
      <h2 className="section__title">
        Photos
      </h2>
      <button type="button" onClick={buttonClick} className="button-33">Sort by date</button>

      <div className="featured__container grid">
        {photos.map((photo) => (
          <Photo id={photo.id} title={photo.title} img={photo.img} setPhotos={setPhotos} />
        ))}
      </div>
    </section>
  );
}

export default memo(Card);
