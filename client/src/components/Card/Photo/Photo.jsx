import React from 'react';
import './photo.scss';

function Photo({
  id, img, title, setPhotos,
}) {
  const hadleClick = () => {
    fetch(`http://localhost:3001/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => setPhotos(result.content));
  };

  return (
    <article key={id} className="featured__card">

      <img src={`http://localhost:3001${img}`} alt="" className="featured__img" />

      <div className="featured__data">
        <h3 className="featured__title">{title}</h3>
      </div>

      <button id={id} type="button" onClick={hadleClick} className="button featured__button">Delete</button>
    </article>
  );
}

export default Photo;
