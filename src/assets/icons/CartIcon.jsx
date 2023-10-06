import PropTypes from 'prop-types';
import React from 'react';

import styles from './CartIcon.module.css';

function CartIcon({
  color, contrast, width, height,
}) {
  let fixedWidth = 32;
  let fixedHeight = 32;

  if (width !== undefined && height !== undefined) {
    fixedWidth = height;
  } else if (width !== undefined) {
    fixedHeight = width;
  } else if (height !== undefined) {
    fixedWidth = height;
  }

  return (
    <svg className={styles[`cartIcon--${color}${contrast ? '--contrast' : ''}`]} version="1.1" xmlns="http://www.w3.org/2000/svg" width={fixedWidth} height={fixedHeight} viewBox="0 0 32 32">
      <title>cart</title>
      <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
      <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z" />
      <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z" />
    </svg>
  );
}

CartIcon.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
  contrast: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

CartIcon.defaultProps = {
  color: 'primary',
  contrast: false,
  width: undefined,
  height: undefined,
};

export default CartIcon;
