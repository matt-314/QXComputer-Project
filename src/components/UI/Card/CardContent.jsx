import PropTypes from 'prop-types';
import React from 'react';

import styles from './CardContent.module.css';

function CardContent({ children }) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContent;
