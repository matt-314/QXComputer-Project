import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/UI/Button/Button';

import styles from './ButtonTestSection.module.css';

function ButtonTestSection({ title, color }) {
  return (
    <section className={`${styles.section} ${styles[`section--background--contrast--${color}`]}`}>
      <h2 className={styles[`title--color--${color}`]}>{title}</h2>
      <div className={styles.subsection}>
        <span className={styles[`title--color--${color}`]}>Solid</span>
        <Button className={styles.button} size="xs" color={color}>
          Button
        </Button>
        <Button className={styles.button} size="sm" color={color}>
          Button
        </Button>
        <Button className={styles.button} size="md" color={color}>
          Button
        </Button>
        <Button className={styles.button} size="lg" color={color}>
          Button
        </Button>
        <Button className={styles.button} size="xs" color={color} shape="round">
          Button
        </Button>
        <Button className={styles.button} size="sm" color={color} shape="round">
          Button
        </Button>
        <Button className={styles.button} size="md" color={color} shape="round">
          Button
        </Button>
        <Button className={styles.button} size="lg" color={color} shape="round">
          Button
        </Button>
        <Button className={styles.button} size="xs" color={color} shape="square">
          Button
        </Button>
        <Button className={styles.button} size="sm" color={color} shape="square">
          Button
        </Button>
        <Button className={styles.button} size="md" color={color} shape="square">
          Button
        </Button>
        <Button className={styles.button} size="lg" color={color} shape="square">
          Button
        </Button>
      </div>
      <div className={styles.subsection}>
        <span className={styles[`title--color--${color}`]}>Outline</span>
        <Button className={styles.button} size="xs" color={color} fill="outline">
          Button
        </Button>
        <Button className={styles.button} size="sm" color={color} fill="outline">
          Button
        </Button>
        <Button className={styles.button} size="md" color={color} fill="outline">
          Button
        </Button>
        <Button className={styles.button} size="lg" color={color} fill="outline">
          Button
        </Button>
      </div>
      <div className={styles.subsection}>
        <span className={styles[`title--color--${color}`]}>Ghost</span>
        <Button className={styles.button} size="xs" color={color} fill="ghost">
          Button
        </Button>
        <Button className={styles.button} size="sm" color={color} fill="ghost">
          Button
        </Button>
        <Button className={styles.button} size="md" color={color} fill="ghost">
          Button
        </Button>
        <Button className={styles.button} size="lg" color={color} fill="ghost">
          Button
        </Button>
      </div>
    </section>
  );
}

ButtonTestSection.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']).isRequired,
};

export default ButtonTestSection;
