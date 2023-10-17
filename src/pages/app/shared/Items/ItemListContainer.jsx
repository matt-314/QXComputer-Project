import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { useService } from '../../../../hooks/service';

import Item from './Item';

import Spinner from '../../../../components/UI/Spinner/Spinner';

import styles from './ItemListContainer.module.css';

function ItemListContainer({ title, category }) {
  const [data, isLoading, error, fetchProducts] = useService();

  useEffect(() => {
    fetchProducts('products', 'getProducts', [{ limit: 6, category }]);
  }, [category]);

  return (
    <section>
      <h2>{ title }</h2>
      <div className={styles.itemList}>
        {isLoading && <span className={styles.itemList__spinnerContainer}><Spinner /></span>}
        {!isLoading && error && <p>An error occurred while loading</p>}
        {!isLoading && !error && data && data.map((item) => (
          <Item
            key={item.id}
            itemId={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            description={item.description}
            price={item.price}
            className={styles.itemList__item}
          />
        ))}
      </div>
    </section>
  );
}

ItemListContainer.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.oneOf(['featured', 'laptops', 'components', 'desktops']).isRequired,
};

export default ItemListContainer;
