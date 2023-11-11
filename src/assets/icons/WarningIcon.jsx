import PropTypes from 'prop-types';
import React from 'react';

function WarningIcon({
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
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
  );
}

WarningIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

WarningIcon.defaultProps = {
  width: undefined,
  height: undefined,
  className: undefined,
};

export default WarningIcon;
