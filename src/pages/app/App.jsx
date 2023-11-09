import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import { CartProvider } from '../../contexts/Cart/CartContext';

import styles from './App.module.css';

function App() {
  return (
    <CartProvider>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </CartProvider>
  );
}

export default App;
