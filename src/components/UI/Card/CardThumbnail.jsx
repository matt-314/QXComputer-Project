import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardThumbnail.module.css';

function CardThumbnail({ thumbnailUrl }) {
  return (
    <div
      className={styles.thumbnail}
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  );
}

CardThumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
};

export default CardThumbnail;
