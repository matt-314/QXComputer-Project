import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardHeading.module.css';

function getHeaderLevel(title, level = 2) {
  switch (level) {
    case 2:
      return <h2 className={styles.heading__title} title={title}>{title}</h2>;
    case 3:
      return <h3 className={styles.heading__title} title={title}>{title}</h3>;
    case 4:
      return <h4 className={styles.heading__title} title={title}>{title}</h4>;
    case 5:
      return <h5 className={styles.heading__title} title={title}>{title}</h5>;
    default:
      throw new Error('Invalid header level');
  }
}

function CardHeading({ title, subtitle, headingLevel }) {
  return (
    <div className={styles.heading}>
      {getHeaderLevel(title, headingLevel)}
      {subtitle && <p className={styles.heading__subtitle}>{subtitle}</p>}
    </div>
  );
}

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  headingLevel: PropTypes.oneOf([2, 3, 4, 5]),
};

CardHeading.defaultProps = {
  subtitle: undefined,
  headingLevel: 2,
};

export default CardHeading;
