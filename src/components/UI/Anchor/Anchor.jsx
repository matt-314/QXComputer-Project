import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './Anchor.module.css';

function getClassName(color, extraClassName) {
  const colorStyles = {
    primary: styles['anchor--primary'],
    secondary: styles['anchor--secondary'],
    tertiary: styles['anchor--tertiary'],
    success: styles['anchor--success'],
    danger: styles['anchor--danger'],
    warning: styles['anchor--warning'],
    neutral: styles['anchor--neutral'],
    light: styles['anchor--light'],
  };

  return `${styles.anchor} ${colorStyles[color]} ${extraClassName ?? ''}`;
}

function Anchor(
  {
    href,
    color,
    className,
    children,
  },
) {
  const finalClassName = getClassName(color, className);

  return (
    <Link
      to={href}
      className={finalClassName}
    >
      {children}
    </Link>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

Anchor.defaultProps = {
  color: 'neutral',
  className: undefined,
  children: undefined,
};

export default Anchor;
