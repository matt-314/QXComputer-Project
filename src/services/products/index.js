import {
  collection,
  doc,
  limit as fsLimit,
  getDoc,
  getDocs, getFirestore, orderBy, query,
  where,
} from 'firebase/firestore';

export async function getProducts({ limit, category } = { offset: 0 }) {
  const db = getFirestore();
  const productsCollection = collection(db, 'products');
  const response = category === 'featured'
    ? await getDocs(
      query(
        productsCollection,
        where('stars', '>=', 3),
        orderBy('stars', 'desc'),
        fsLimit(limit),
      ),
    )
    : await getDocs(
      query(
        productsCollection,
        where('category', '==', category),
        fsLimit(limit),
      ),
    );
  return response.docs.map((docItem) => ({ ...docItem.data(), id: docItem.id }));
}

export async function getProduct(id) {
  const db = getFirestore();
  const productDoc = doc(db, 'products', id);
  const response = await getDoc(productDoc);

  return { ...response.data(), id: response.id };
}

export const PRODUCTS = {
  SERVICE: 'products',
  GET_PRODUCT: 'getProduct',
  GET_PRODUCTS: 'getProducts',
};
