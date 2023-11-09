import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

function deepMapCopy(oldMap) {
  return new Map(JSON.parse(
    JSON.stringify([...oldMap]),
  ));
}

const defaultCarState = {
  items: new Map(),
  totalPrice: 0,
};

const CartContext = React.createContext({});

function CartProvider({ children }) {
  const [cartState, setCartState] = useState(defaultCarState);
  const addNewProduct = (product, amount) => setCartState((prevState) => {
    const newItems = deepMapCopy(prevState.items);
    const storedProduct = newItems.get(product.id) ?? { ...product, amount: 0 };
    storedProduct.amount += amount;
    const newTotalPrice = prevState.totalPrice + (product.price * amount);
    newItems.set(product.id, storedProduct);
    return {
      items: newItems,
      totalPrice: newTotalPrice,
    };
  });
  const removeProduct = (productId, amount) => setCartState((prevState) => {
    const newItems = deepMapCopy(prevState.items);
    const storedProduct = newItems.get(productId);
    if (!storedProduct) {
      return prevState;
    }
    storedProduct.amount -= amount;
    if (storedProduct.amount <= 0) {
      newItems.delete(productId);
    }
    const newTotalPrice = prevState.totalPrice - (storedProduct.price * amount);

    return {
      items: newItems,
      totalPrice: newTotalPrice,
    };
  });

  const cartContextValue = useMemo(() => ({
    ...cartState,
    addNewProduct,
    removeProduct,
  }), [cartState, addNewProduct, removeProduct]);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartContext, CartProvider };
