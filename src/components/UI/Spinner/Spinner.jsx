import PropTypes from 'prop-types';
import React from 'react';

import styles from './Spinner.module.css';

function Spinner({ color }) {
  const finalClassName = `${styles.spinner} ${styles[`spinner--${color}`]}`;
  return (
    <span className={finalClassName} />
  );
}

Spinner.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
};

Spinner.defaultProps = {
  color: 'primary',
};

export default Spinner;
