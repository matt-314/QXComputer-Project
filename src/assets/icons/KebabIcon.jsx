import PropTypes from 'prop-types';
import React from 'react';

function KebabIcon({
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
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={fixedWidth}
      height={fixedHeight}
      viewBox="0 0 512 512"
    >
      <title />
      <g id="fonticon-ignore" />
      <path d="M192 32h320v64h-320v-64zM192 224h320v64h-320v-64zM192 416h320v64h-320v-64zM0 64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM0 256c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM0 448c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z" />
    </svg>
  );
}

KebabIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

KebabIcon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default KebabIcon;
