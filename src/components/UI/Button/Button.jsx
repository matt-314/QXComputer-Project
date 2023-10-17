import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import IconFactory from '../../../assets/icons/IconFactory';

import styles from './Button.module.css';

function getIconFactory({
  icon, color, size, fill,
}) {
  const iconSizes = {
    xs: 12,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  };

  return (
    <IconFactory
      icon={icon}
      color={color}
      height={iconSizes[size]}
      contrast={fill === 'solid'}
    />
  );
}

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
    round: styles[`button--shape--round--${size}`],
  };

  return `${styles.button} ${styles[`button--${size}`]} ${shapes[shape]} ${fills[fill]} ${extraClassName ?? ''}`;
}

function getAnchorOrButton({
  href, onClick, type, className, ariaLabel, children,
}) {
  return href
    ? (
      <Link
        to={href}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    ) : (
      <button
        type={type === 'button' ? 'button' : 'submit'}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </button>
    );
}

function Button({
  children,
  className,
  color,
  type,
  fill,
  size,
  shape,
  icon,
  iconOnly,
  onClick,
  href,
}) {
  const finalClassName = getButtonClassName({
    extraClassName: className, color, fill, size, shape,
  });
  const content = (
    <>
      {icon && getIconFactory({
        icon, color, size, fill,
      })}
      {
        !iconOnly ? (
          <span className={styles.button__text}>
            {children}
          </span>
        ) : undefined
      }
    </>
  );

  return getAnchorOrButton({
    href,
    onClick,
    type,
    className: finalClassName,
    ariaLabel: iconOnly ? children : undefined,
    children: content,
  });
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
  type: PropTypes.oneOf(['button', 'submit']),
  fill: PropTypes.oneOf(['solid', 'outline', 'ghost']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['default', 'square', 'round']),
  icon: PropTypes.string,
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  color: 'primary',
  type: 'button',
  fill: 'solid',
  size: 'md',
  shape: 'default',
  icon: undefined,
  iconOnly: false,
  onClick: undefined,
  href: undefined,
};

export default Button;
