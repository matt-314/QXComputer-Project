import React from 'react';

import Anchor from '../components/UI/Anchor/Anchor';

import styles from './AnchorTestPage.module.css';

function AnchorTestPage() {
  return (
    <div>
      <h1>Anchor Widget</h1>
      <section>
        <h2>Primary</h2>
        <div>
          <Anchor className={styles.anchor} href="#" color="primary" fill="none">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="primary" fill="outline">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="primary" fill="solid">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Secondary</h2>
        <div>
          <Anchor className={styles.anchor} href="#" color="secondary" fill="none">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="secondary" fill="outline">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="secondary" fill="solid">Anchor</Anchor>
        </div>
      </section>
      <section>
        <h2>Neutral</h2>
        <div>
          <Anchor className={styles.anchor} href="#" color="neutral" fill="none">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="neutral" fill="outline">Anchor</Anchor>
          <Anchor className={styles.anchor} href="#" color="neutral" fill="solid">Anchor</Anchor>
        </div>
      </section>
    </div>
  );
}

export default AnchorTestPage;
