import React from 'react';

import PropTypes from 'prop-types';

import styles from './Anchor.module.css';

function getClassName(color, fill, extraClassName) {
  const colorStyles = {
    primary: styles['anchor--primary'],
    secondary: styles['anchor--secondary'],
    tertiary: styles['anchor--tertiary'],
    success: styles['anchor--success'],
    danger: styles['anchor--danger'],
    neutral: styles['anchor--neutral'],
    light: styles['anchor--light'],
  };

  const fillStyles = {
    solid: styles[`anchor--${color}--solid`],
    outline: styles[`anchor--${color}--outline`],
    none: styles['anchor-link'],
  };

  return `${styles.anchor} ${colorStyles[color]} ${fillStyles[fill]} ${extraClassName ?? ''}`;
}

function Anchor(
  {
    href,
    color,
    fill,
    className,
    children,
  },
) {
  const finalClassName = getClassName(color, fill, className);

  return (
    <a
      href={href}
      className={finalClassName}
    >
      {children}
    </a>
  );
}

Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'neutral', 'light']),
  fill: PropTypes.oneOf(['solid', 'outline', 'none']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

Anchor.defaultProps = {
  color: 'neutral',
  fill: 'none',
  className: undefined,
  children: undefined,
};

export default Anchor;
