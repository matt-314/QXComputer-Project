import PropTypes from 'prop-types';
import React from 'react';

import AnchorTestPage from './pages/_tests/Anchor/AnchorTestPage';
import ButtonTestPage from './pages/_tests/Button/ButtonTestPage';
import CardTestPage from './pages/_tests/Card/CardTestPage';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';

import styles from './App.module.css';

function getTestPage(testMode) {
  switch (testMode.page) {
    case 'anchor':
      return (
        <main className={styles.contentPadding}>
          <AnchorTestPage />
        </main>
      );
    case 'button':
      return (
        <main className={styles.contentPadding}>
          <ButtonTestPage />
        </main>
      );
    case 'card':
      return (
        <main className={styles.contentPadding}>
          <CardTestPage />
        </main>
      );
    default:
      return null;
  }
}

function App({ testMode }) {
  return testMode
    ? getTestPage(testMode)
    : (
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

App.propTypes = {
  testMode: PropTypes.objectOf({
    page: PropTypes.oneOf(['anchor', 'button', 'card']),
  }),
};

App.defaultProps = {
  testMode: undefined,
};

export default App;
