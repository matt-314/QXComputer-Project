import React from 'react';

import Anchor from '../UI/Anchor/Anchor';

import styles from './NavbarTitle.module.css';

function NavbarTitle() {
  return (
    <div>
      <Anchor className={styles.title__anchor} href="/">
        <h1 className={styles.title}>QX</h1>
        <p className={styles.subtitle}>Computers</p>
      </Anchor>
    </div>
  );
}

export default NavbarTitle;
