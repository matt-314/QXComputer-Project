import React from 'react';

import styles from './NavbarTitle.module.css';

function NavbarTitle() {
  return (
    <div>
      <h1 className={styles.title}>QX</h1>
      <p className={styles.subtitle}>Computers</p>
    </div>
  );
}

export default NavbarTitle;
