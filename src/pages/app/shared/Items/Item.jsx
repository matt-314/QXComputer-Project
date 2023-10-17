import PropTypes from 'prop-types';
import React from 'react';

import Card from '../../../../components/UI/Card/Card';

import styles from './Item.module.css';

function Item({
  itemId, thumbnail, title, description, price, className,
}) {
  return (
    <Card
      title={title}
      thumbnail={thumbnail}
      headingLevel={3}
      className={className}
      actions={[
        {
          text: 'Mostrar más detalles',
          color: 'primary',
          href: `/item/${itemId}`,
        },
      ]}
    >
      <div className={styles.item__descriptionContainer}>
        <p className={styles.item__description}>{description}</p>
      </div>
      <p className={styles.item__priceContainer}>
        <span className={styles.item__priceLabel}>Precio:</span>
        <span> </span>
        <span className={styles.item__price}>
          {new Intl.NumberFormat('es-AR', {
            styles: 'currency',
            currency: 'ARS',
          }).format(price)}
        </span>
      </p>
    </Card>
  );
}

Item.propTypes = {
  itemId: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    url: PropTypes.string,
    backgroundCoverMode: PropTypes.oneOf(['cover', 'contain', 'auto']),
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  className: PropTypes.string,
};

Item.defaultProps = {
  className: undefined,
};

export default Item;
