import PropTypes from 'prop-types';
import React from 'react';

function ErrorIcon({
  width, height, className,
}) {
  let fixedWidth = 32;
  let fixedHeight = 32;
  if (width !== undefined && height !== undefined) {
    fixedWidth = height;
    fixedHeight = height;
  } else if (width !== undefined) {
    fixedHeight = width;
    fixedWidth = width;
  } else if (height !== undefined) {
    fixedWidth = height;
    fixedHeight = height;
  }
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={fixedWidth}
      height={fixedHeight}
      viewBox="0 0 512 512"
    >
      <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </svg>
  );
}

ErrorIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

ErrorIcon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default ErrorIcon;
