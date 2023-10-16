import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/Button';

import styles from './CardActions.module.css';

function CardActions({ actions }) {
  return (
    <div className={styles.actions}>
      {actions.map((action) => (
        <Button
          key={action.text}
          color={action.color}
          fill={action.fill}
          size="sm"
          href={action.href}
          onClick={action.callback}
          className={styles.actions__item}
        >
          {action.text}
        </Button>
      ))}
    </div>
  );
}

CardActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']),
      fill: PropTypes.oneOf(['solid', 'outline', 'ghost']),
      href: PropTypes.string,
      callback: PropTypes.func,
    }),
  ).isRequired,
};

export default CardActions;
