import PropTypes from 'prop-types';
import React from 'react';

import Button from '../UI/Button/Button';

import styles from './NavbarCart.module.css';

function NavbarCart({ cartItems }) {
  return (
    <div className={styles.cart}>
      <Button icon="cart" size="xl" color="primary" contrast iconOnly>Cart</Button>
      <span className={`${styles.cart__badge} ${styles['cart__badge--color']}`}>{cartItems}</span>
    </div>
  );
}

NavbarCart.propTypes = {
  cartItems: PropTypes.number.isRequired,
};

export default NavbarCart;
