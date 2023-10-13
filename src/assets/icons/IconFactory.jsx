import PropTypes from 'prop-types';
import React from 'react';

import CartIcon from './CartIcon';
import KebabIcon from './KebabIcon';

import styles from './IconFactory.module.css';

const ICONS = {
  cart: (width, height, className) => (<CartIcon width={width} height={height} className={className} />),
  kebab: (width, height, className) => (<KebabIcon width={width} height={height} className={className} />),
};

function IconFactory({
  icon,
  color,
  contrast,
  width,
  height,
}) {
  return ICONS[icon](width, height, styles[`iconFactory--${color}${contrast ? '--contrast' : ''}`]);
}

IconFactory.propTypes = {
  icon: PropTypes.oneOf(['cart', 'kebab']).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
  contrast: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

IconFactory.defaultProps = {
  color: 'primary',
  contrast: false,
  width: undefined,
  height: undefined,
};

export default IconFactory;
