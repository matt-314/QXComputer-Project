import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '../../../components/UI/Button/Button';

import styles from './DetailOverview.module.css';

function DetailOverview({
  productImage,
  productTitle,
  productPrice,
  productDescription,
  productAmount,
  onAddToCart,
}) {
  const [amount, setAmount] = useState(productAmount);
  const plusButtonHandler = () => setAmount((prevState) => prevState + 1);
  const minusButtonHandler = () => setAmount((prevState) => (prevState ? Math.max(prevState - 1, 1) : 0));
  const inputChangeHandler = (ev) => setAmount(ev.target.value);
  const addToCartHandler = () => {
    if (!amount) {
      return;
    }
    onAddToCart(amount);
  };

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
        <div className={styles.detailOverview__amount}>
          <Button icon="plus" iconOnly size="sm" color="neutral" onClick={plusButtonHandler}>
            Add one of this item
          </Button>
          <input
            className={styles.detailOverview__amountInput}
            type="number"
            name="amountToBuy"
            value={amount}
            onChange={inputChangeHandler}
            aria-label="Cantidad de items a comprar"
          />
          <Button icon="minus" iconOnly size="sm" color="neutral" onClick={minusButtonHandler}>
            Remove one of this item
          </Button>
        </div>
        <div className={styles.detailOverview__actions}>
          <Button color="primary">Comprar ahora</Button>
          <Button color="primary" fill="outline" onClick={addToCartHandler}>Agregar al carrito</Button>
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
  productAmount: PropTypes.number,
  onAddToCart: PropTypes.func.isRequired,
};

DetailOverview.defaultProps = {
  productAmount: 0,
};

export default DetailOverview;
