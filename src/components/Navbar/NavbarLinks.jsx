import React, { useContext } from 'react';

import Anchor from '../UI/Anchor/Anchor';

import NavbarCart from './NavbarCart';
import styles from './NavbarLinks.module.css';

import { CartContext } from '../../contexts/Cart/CartContext';

function NavbarLinks() {
  const cartCtx = useContext(CartContext);
  const pageLinks = [
    { href: '/categories/components', text: 'Components' },
    { href: '/categories/laptops', text: 'Laptops' },
    { href: '/categories/desktops', text: 'Desktops' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageLinks}>
        {
          pageLinks.map(({ href, text }) => (
            <Anchor
              href={href}
              key={href}
              color="light"
            >
              {text}
            </Anchor>
          ))
        }
      </div>
      <div className={styles.accountLinks}>
        <NavbarCart cartItems={cartCtx.items.size} />
      </div>
    </div>
  );
}

export default NavbarLinks;
