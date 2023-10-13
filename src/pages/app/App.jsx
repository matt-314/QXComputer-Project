import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';

import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={`${styles.contentPadding} ${styles.header}`}>
        <Navbar />
      </header>
      <main className={styles.contentPadding}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
