import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  largeImageURL,
  webformatURL,
  onOpenImage,
}) {
  const handleOpenIamge = () => {
    onOpenImage(largeImageURL);
  };

  return (
    <li className={s.imageGalleryItem}>
      <img
        className={s.imageGalleryItemImage}
        url={largeImageURL}
        src={webformatURL}
        alt=""
        onClick={handleOpenIamge}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onOpenImage: PropTypes.func,
};
