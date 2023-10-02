import PropTypes from 'prop-types';
import React from 'react';

import styles from './Button.module.css';

function getButtonClassName({
  extraClassName, size, color, fill, shape,
}) {
  const fills = {
    solid: styles[`button--${color}--solid`],
    outline: styles[`button--${color}--outline`],
    ghost: styles[`button--${color}--ghost`],
  };

  const shapes = {
    default: styles['button--shape--default'],
    square: styles['button--shape--square'],
    round: styles['button--shape--round'],
  };

  return `${styles.button} ${styles[`button--${size}`]} ${shapes[shape]} ${fills[fill]} ${extraClassName ?? ''}`;
}

function Button({
  children,
  className,
  color,
  type,
  fill,
  size,
  shape,
  onClick,
}) {
  const finalClassName = getButtonClassName({
    extraClassName: className, color, fill, size, shape,
  });
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={finalClassName}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
  type: PropTypes.oneOf(['button', 'submit']),
  fill: PropTypes.oneOf(['solid', 'outline', 'ghost']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  shape: PropTypes.oneOf(['default', 'square', 'round']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: undefined,
  color: 'primary',
  type: 'button',
  fill: 'solid',
  size: 'md',
  shape: 'default',
  onClick: undefined,
};

export default Button;
