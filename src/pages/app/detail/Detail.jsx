import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailOverview from './DetailOverview';

import Spinner from '../../../components/UI/Spinner/Spinner';

import { useService } from '../../../hooks/service';

import styles from './Detail.module.css';

function Detail() {
  const params = useParams();
  const [data, isLoading, error, fetchProduct] = useService();

  useEffect(() => {
    fetchProduct('products', 'getProduct', [params.itemId]);
  }, [params]);

  return (
    <div className={styles.detail__container}>
      {isLoading && <div className={styles.detail__spinnerContainer}><Spinner /></div>}
      {!isLoading && error && <p>An error occurred while loading</p>}
      {!isLoading && !error && data && (
        <DetailOverview
          productTitle={data.title}
          productImage={data.thumbnail.url}
          productPrice={data.price}
          productDescription={data.description}
        />
      )}
    </div>
  );
}

export default Detail;
