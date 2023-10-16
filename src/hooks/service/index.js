import { useState } from 'react';

import * as ProductService from '../../services/products';

const SERVICES = new Map([
  ['products', ProductService],
]);

export function useService() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProductos = async (serviceName, method, params = []) => {
    try {
      setLoading(true);
      const response = await SERVICES.get(serviceName)[method](...params);
      setData(response);
      setError(false);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return [data, loading, error, fetchProductos];
}
