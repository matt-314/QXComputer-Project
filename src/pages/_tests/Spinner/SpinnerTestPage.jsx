import React from 'react';

import Spinner from '../../../components/UI/Spinner/Spinner';
import styles from './SpinnerTestPage.module.css';

function SpinnerTestPage() {
  return (
    <div>
      <h1>Spinner Test Page</h1>
      <div>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-secondary-contrast)' }}>
          <Spinner />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-secondary-contrast)' }}>
          <Spinner color="secondary" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-tertiary-contrast)' }}>
          <Spinner color="tertiary" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-success-contrast)' }}>
          <Spinner color="danger" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-warning-contrast)' }}>
          <Spinner color="success" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-danger-contrast)' }}>
          <Spinner color="warning" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-medium-contrast)' }}>
          <Spinner color="neutral" />
        </span>
        <span className={styles.spinnerTestPage__container} style={{ backgroundColor: 'var(--color-light-contrast)' }}>
          <Spinner color="light" />
        </span>
      </div>
    </div>
  );
}

export default SpinnerTestPage;
