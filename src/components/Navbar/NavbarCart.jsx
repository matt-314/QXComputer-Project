import PropTypes from 'prop-types';
import React from 'react';

import Button from '../UI/Button/Button';

import styles from './NavbarCart.module.css';

function NavbarCart({ cartItems }) {
  return (
    <>
      <Button icon="cart" size="md" color="primary" contrast iconOnly>Cart</Button>
      <span className={`${styles.cart__badge} ${styles['cart__badge--color']}`}>{cartItems}</span>
    </>
  );
}

NavbarCart.propTypes = {
  cartItems: PropTypes.number.isRequired,
};

export default NavbarCart;
