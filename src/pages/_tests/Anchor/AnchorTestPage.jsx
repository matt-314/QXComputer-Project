import React from 'react';

import Anchor from '../../../components/UI/Anchor/Anchor';

import styles from './AnchorTestPage.module.css';

function AnchorTestPage() {
  return (
    <div>
      <h1>Anchor Widget</h1>
      <section>
        <h2>Primary</h2>
        <div style={{ backgroundColor: 'var(--color-primary-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="primary">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Secondary</h2>
        <div style={{ backgroundColor: 'var(--color-secondary-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="secondary">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Tertiary</h2>
        <div style={{ backgroundColor: 'var(--color-tertiary-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="tertiary">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Success</h2>
        <div style={{ backgroundColor: 'var(--color-success-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="success">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Danger</h2>
        <div style={{ backgroundColor: 'var(--color-danger-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="danger">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Warning</h2>
        <div style={{ backgroundColor: 'var(--color-warning-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="warning">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Neutral</h2>
        <div style={{ backgroundColor: 'var(--color-neutral-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="neutral">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Light</h2>
        <div style={{ backgroundColor: 'var(--color-light-contrast)' }}>
          <Anchor className={styles.anchor} href="#" color="light">Anchor</Anchor>
        </div>
      </section>
    </div>
  );
}

export default AnchorTestPage;
