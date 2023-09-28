import React from 'react';

import Anchor from '../UI/Anchor/Anchor';

import NavbarCart from './NavbarCart';
import styles from './NavbarLinks.module.css';

function NavbarLinks() {
  const pageLinks = [
    { href: '#components', text: 'Components' },
    { href: '#laptops', text: 'Laptops' },
    { href: '#desktops', text: 'Desktops' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.pageLinks}>
        {
          pageLinks.map(({ href, text }) => (
            <Anchor
              href={href}
              key={href}
            >
              {text}
            </Anchor>
          ))
        }
      </div>
      <div className={styles.accountLinks}>
        <NavbarCart cartItems={0} />
      </div>
    </div>
  );
}

export default NavbarLinks;
