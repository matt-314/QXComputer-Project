import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './TestPage.module.css';

function TestPage() {
  return (
    <main className={styles.testPage}>
      <Outlet />
    </main>
  );
}

export default TestPage;
