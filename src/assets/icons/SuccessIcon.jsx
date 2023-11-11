import PropTypes from 'prop-types';
import React from 'react';

function SuccessIcon({
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
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
}

SuccessIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

SuccessIcon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default SuccessIcon;
