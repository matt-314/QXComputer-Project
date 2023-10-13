import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Home from './home/Home';

import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={`${styles.contentPadding} ${styles.header}`}>
        <Navbar />
      </header>
      <main className={styles.contentPadding}>
        <Home />
      </main>
    </>
  );
}

export default App;
