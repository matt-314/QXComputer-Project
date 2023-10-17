import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardThumbnail.module.css';

function CardThumbnail({ thumbnailUrl, backgroundCoverMode }) {
  return (
    <div
      className={styles.thumbnail}
      style={{
        backgroundImage: `url(${thumbnailUrl})`,
        backgroundPosition: 'center',
        backgroundSize: backgroundCoverMode,
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
}

CardThumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  backgroundCoverMode: PropTypes.oneOf(['cover', 'contain', 'auto']),
};

CardThumbnail.defaultProps = {
  backgroundCoverMode: 'cover',
};

export default CardThumbnail;
