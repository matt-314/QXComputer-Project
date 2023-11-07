import PropTypes from 'prop-types';
import React from 'react';

function PlusIcon({
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
      viewBox="0 0 32 32"
    >
      <title>plus</title>
      <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z" />
    </svg>
  );
}

PlusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

PlusIcon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default PlusIcon;
