import PropTypes from 'prop-types';
import React from 'react';

import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeading from './CardHeading';
import CardThumbnail from './CardThumbnail';

import styles from './Card.module.css';

function Card({
  title, subtitle, headingLevel, thumbnail, actions, className, children,
}) {
  return (
    <article className={`${styles.card} ${className}`}>
      {thumbnail && <CardThumbnail thumbnailUrl={thumbnail.url} backgroundCoverMode={thumbnail.backgroundCoverMode} />}
      <CardHeading title={title} subtitle={subtitle} headingLevel={headingLevel} />
      {
        children && (
        <>
          <div className={styles.card__divider} />
          <CardContent>{children}</CardContent>
        </>
        )
      }
      {
        actions
        && actions.length && (
          <>
            <div className={styles.card__divider} />
            <CardActions actions={actions} />
          </>
        )
      }
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  headingLevel: PropTypes.number,
  thumbnail: PropTypes.shape({
    url: PropTypes.string,
    backgroundCoverMode: PropTypes.oneOf(['cover', 'contain', 'auto']),
  }),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
      fill: PropTypes.oneOf(['solid', 'outline', 'ghost']),
      href: PropTypes.string,
      callback: PropTypes.func,
    }),
  ),
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  subtitle: undefined,
  headingLevel: 2,
  thumbnail: undefined,
  actions: undefined,
  className: undefined,
  children: undefined,
};

export default Card;
