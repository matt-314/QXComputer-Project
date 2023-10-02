import PropTypes from 'prop-types';
import React from 'react';

import styles from './NavbarCart.module.css';

function NavbarCart({ cartItems }) {
  return (
    <button type="button" className={styles.cart} aria-label={`Cart with ${cartItems} item`}>
      <img className={styles.cart__image} src="/images/cart.svg" alt="" />
      <span className={`${styles.cart__badge} ${styles['cart__badge--color']}`}>{cartItems}</span>
    </button>
  );
}

NavbarCart.propTypes = {
  cartItems: PropTypes.number.isRequired,
};

export default NavbarCart;
