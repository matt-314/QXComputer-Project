import React, { useState } from 'react';

import Anchor from '../../../components/UI/Anchor/Anchor';
import Card from '../../../components/UI/Card/Card';

import styles from './CardTestPage.module.css';

function CardTestPage() {
  const [actionValue, setActionValue] = useState('No Action Clicked');

  const action1Handler = () => setActionValue('Action 1 Clicked');
  const action2Handler = () => setActionValue('Action 2 Clicked');

  return (
    <div>
      <h1>Card Test Page</h1>
      <section>
        <h2>Simple Card</h2>
        <div className={styles.section}>
          <Card title="Random Card" className={styles.card} />
          <Card title="Random Card" subtitle="Random subtitle" className={styles.card} />
        </div>
      </section>
      <section>
        <h2>Card With Content</h2>
        <div className={styles.section}>
          <Card title="Random Article" className={styles.card}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Random link to
              {' '}
              <Anchor href="google.com" color="primary">google</Anchor>
            </p>
          </Card>
          <Card title="Random Article" subtitle="With subtitle" className={styles.card}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Random link to
              {' '}
              <Anchor href="google.com" color="primary">google</Anchor>
            </p>
          </Card>
        </div>
      </section>
      <section>
        <h2>Card With Actions</h2>
        <div className={styles.section}>
          <Card
            title="Random Article"
            subtitle="With subtitle"
            actions={[
              {
                text: 'Action 1',
                color: 'primary',
                fill: 'solid',
                callback: action1Handler,
              },
              {
                text: 'Action 2',
                color: 'danger',
                fill: 'outline',
                callback: action2Handler,
              },
            ]}
            className={styles.card}
          >
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Random link to
              {' '}
              <Anchor href="https://google.com" color="primary">google</Anchor>
            </p>
          </Card>
          <Card
            title="Action Result"
            subtitle="Card to visualize the action result"
            className={styles.card}
          >
            <p>{actionValue}</p>
          </Card>
        </div>
      </section>
      <section>
        <h2>Card With Thumbnail</h2>
        <div className={styles.section}>
          <Card
            title="Tree"
            thumbnail={{
              url: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg',
            }}
            className={styles.card}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi, deserunt</p>
          </Card>
          <Card
            title="Lion"
            thumbnail={{
              url: 'https://i.pinimg.com/originals/88/c7/2d/88c72df090dabb6cd960d13a12e38071.jpg',
            }}
            actions={[
              {
                text: 'Action 1',
                color: 'primary',
                fill: 'solid',
              },
              {
                text: 'Action 2',
                color: 'secondary',
                fill: 'solid',
              },
            ]}
            className={styles.card}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi, deserunt</p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default CardTestPage;
