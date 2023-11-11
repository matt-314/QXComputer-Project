import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DetailOverview from './DetailOverview';

import Spinner from '../../../components/UI/Spinner/Spinner';

import { CartContext } from '../../../contexts/Cart/CartContext';
import { useService } from '../../../hooks/service';

import styles from './Detail.module.css';

function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const cartCtx = useContext(CartContext);
  const [data, isLoading, error, fetchProduct] = useService();

  useEffect(() => {
    fetchProduct('products', 'getProduct', [params.itemId]);
  }, [params]);

  const addProductHandler = (amount) => {
    cartCtx.saveProduct(data, amount);
    navigate('/');
  };

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
          productAmount={cartCtx.items.get(data.id)?.amount ?? 0}
          onAddToCart={addProductHandler}
        />
      )}
    </div>
  );
}

export default Detail;
