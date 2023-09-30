import React from 'react';

import PropTypes from 'prop-types';

import styles from './Anchor.module.css';

function getClassName(color, fill, extraClassName) {
  const colorStyles = {
    primary: {
      color: styles['anchor--primary'],
      fill: {
        solid: styles['anchor--primary--solid'],
        outline: styles['anchor--primary--outline'],
        none: '',
      },
    },
    secondary: {
      color: styles['anchor--secondary'],
      fill: {
        solid: styles['anchor--secondary--solid'],
        outline: styles['anchor--secondary--outline'],
        none: '',
      },
    },
    neutral: {
      color: styles['anchor--neutral'],
      fill: {
        solid: styles['anchor--neutral--solid'],
        outline: styles['anchor--neutral--outline'],
        none: '',
      },
    },
  };

  return `${styles.anchor} ${colorStyles[color].color} ${colorStyles[color].fill[fill]} ${extraClassName ?? ''}`;
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
  color: PropTypes.oneOf(['primary', 'secondary', 'neutral']),
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
