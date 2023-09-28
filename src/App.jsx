import React from 'react';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

import styles from './App.module.css';

function App() {
  return (
    <>
      <header className={`${styles.contentPadding} ${styles.header}`}>
        <Navbar />
      </header>
      <main className={styles.contentPadding}>
        <Main />
      </main>
    </>
  );
}

export default App;
