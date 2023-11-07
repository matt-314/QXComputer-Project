import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../components/UI/Button/Button';

import styles from './DetailOverview.module.css';

function DetailOverview({
  productImage, productTitle, productPrice, productDescription,
}) {
  return (
    <div className={styles.detailOverview}>
      <img src={productImage} alt={productTitle} className={styles.detailOverview__image} />
      <div className={styles.detailOverview__info}>
        <h2>{productTitle}</h2>
        <p>{productDescription}</p>
        <p className={styles.detailOverview__price}>
          {new Intl.NumberFormat('es-AR', {
            styles: 'currency',
            currency: 'ARS',
          }).format(productPrice)}
        </p>
        <div>
          <Button fill="outline" icon="plus" iconOnly size="sm" color="medium" />
          <Button fill="outline" icon="plus" iconOnly size="sm" color="medium" />
        </div>
        <div className={styles.detailOverview__actions}>
          <Button color="primary">Comprar ahora</Button>
          <Button color="primary" fill="outline">Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
}

DetailOverview.propTypes = {
  productImage: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productDescription: PropTypes.string.isRequired,
};

export default DetailOverview;
