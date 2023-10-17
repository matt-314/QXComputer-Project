import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../components/UI/Button/Button';

import styles from './ButtonTestSection.module.css';

function ButtonTestSection({ title, color }) {
  const buttonsAttributes = [
    { size: 'xs', shape: 'default' },
    { size: 'sm', shape: 'default' },
    { size: 'md', shape: 'default' },
    { size: 'lg', shape: 'default' },
    { size: 'xl', shape: 'default' },
    { size: 'xs', shape: 'round' },
    { size: 'sm', shape: 'round' },
    { size: 'md', shape: 'round' },
    { size: 'lg', shape: 'round' },
    { size: 'xl', shape: 'round' },
    { size: 'xs', shape: 'square' },
    { size: 'sm', shape: 'square' },
    { size: 'md', shape: 'square' },
    { size: 'lg', shape: 'square' },
    { size: 'xl', shape: 'square' },
  ];

  const anchorButtonsAttributes = [
    { size: 'xs', shape: 'default' },
    { size: 'sm', shape: 'default' },
    { size: 'md', shape: 'default' },
    { size: 'lg', shape: 'default' },
    { size: 'xl', shape: 'default' },
    { size: 'xs', shape: 'round' },
    { size: 'sm', shape: 'round' },
    { size: 'md', shape: 'round' },
    { size: 'lg', shape: 'round' },
    { size: 'xl', shape: 'round' },
    { size: 'xs', shape: 'square' },
    { size: 'sm', shape: 'square' },
    { size: 'md', shape: 'square' },
    { size: 'lg', shape: 'square' },
    { size: 'xl', shape: 'square' },
  ];

  const iconButtonsAttributes = [
    { size: 'xs', shape: 'default', icon: 'kebab' },
    { size: 'sm', shae: 'default', icon: 'kebab' },
    { size: 'md', shape: 'default', icon: 'kebab' },
    { size: 'lg', shape: 'default', icon: 'kebab' },
    { size: 'xl', shape: 'default', icon: 'kebab' },
    { size: 'xs', shape: 'round', icon: 'kebab' },
    { size: 'sm', shape: 'round', icon: 'kebab' },
    { size: 'md', shape: 'round', icon: 'kebab' },
    { size: 'lg', shape: 'round', icon: 'kebab' },
    { size: 'xl', shape: 'round', icon: 'kebab' },
    { size: 'xs', shape: 'square', icon: 'kebab' },
    { size: 'sm', shape: 'square', icon: 'kebab' },
    { size: 'md', shape: 'square', icon: 'kebab' },
    { size: 'lg', shape: 'square', icon: 'kebab' },
    { size: 'xl', shape: 'square', icon: 'kebab' },
  ];

  return (
    <section className={`${styles.section} ${styles[`section--background--contrast--${color}`]}`}>
      <h2 className={styles[`title--color--${color}`]}>{title}</h2>
      <div className={styles.subsection}>
        <div className={styles[`title--color--${color}`]}>Solid</div>
        <div>
          <div>
            {buttonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="solid"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Button
              </Button>
            ))}
          </div>
          <div>
            {anchorButtonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="solid"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                href="#"
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Anchor
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.subsection}>
        <div className={styles[`title--color--${color}`]}>Outline</div>
        <div>
          <div>
            {buttonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="outline"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Button
              </Button>
            ))}
          </div>
          <div>
            {anchorButtonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="outline"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                href="#"
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Anchor
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.subsection}>
        <div className={styles[`title--color--${color}`]}>Ghost</div>
        <div>
          <div>
            {buttonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="ghost"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Button
              </Button>
            ))}
          </div>
          <div>
            {anchorButtonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="ghost"
                size={buttonAttributes.size}
                color={color}
                shape={buttonAttributes.shape}
                href="#"
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Anchor
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.subsection}>
        <div className={styles[`title--color--${color}`]}>Icons</div>
        <div>
          <div>
            {iconButtonsAttributes.map((buttonAttributes) => (
              <Button
                className={styles.button}
                fill="outline"
                size={buttonAttributes.size}
                icon={buttonAttributes.icon}
                iconOnly
                color={color}
                shape={buttonAttributes.shape}
                key={`${buttonAttributes.size}-${buttonAttributes.shape}`}
              >
                Anchor
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

ButtonTestSection.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'success', 'danger', 'warning', 'neutral', 'light']).isRequired,
};

export default ButtonTestSection;
