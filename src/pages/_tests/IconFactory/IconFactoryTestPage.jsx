import React from 'react';

import IconFactory from '../../../assets/icons/IconFactory';

import styles from './IconFactoryTestPage.module.css';

function IconFactoryTestPage() {
  const icons = ['cart', 'kebab', 'plus', 'minus', 'warning', 'success', 'error', 'cross'];
  const colors = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light'];

  return (
    <div className={styles.factoryTestPage}>
      <h1>IconFactory Test Page</h1>
      <section>
        <div>
          {icons.map((icon) => (
            <div key={icon}>
              <h2 className={styles.factoryTestPage__iconSection__title}>{icon}</h2>
              <div className={styles.factoryTestPage__iconSection}>
                {colors.map((color) => (
                  <div key={color}>
                    <div style={{
                      backgroundColor: `var(--color-${color}-contrast)`,
                      padding: '0.5rem',
                      borderRadius: '3px',
                    }}
                    >
                      <IconFactory icon={icon} color={color} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default IconFactoryTestPage;
