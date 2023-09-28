import React from 'react';

import NavbarLinks from './NavbarLinks';
import NavbarTitle from './NavbarTitle';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavbarTitle />
      <NavbarLinks />
    </nav>
  );
}

export default Navbar;
