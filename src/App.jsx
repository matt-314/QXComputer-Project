import React from 'react';

import PropTypes from 'prop-types';
import AnchorTestPage from './_tests/AnchorTestPage';

import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

import styles from './App.module.css';

function getTestPage(testMode) {
  switch (testMode.page) {
    case 'anchor':
      return (
        <main className={styles.contentPadding}>
          <AnchorTestPage />
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
          <Main />
        </main>
      </>
    );
}

App.propTypes = {
  testMode: PropTypes.objectOf({
    page: PropTypes.oneOf(['anchor']),
  }),
};

App.defaultProps = {
  testMode: undefined,
};

export default App;
