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
  const saveProduct = (product, amount) => setCartState((prevState) => {
    const newItems = deepMapCopy(prevState.items);
    const storedProduct = newItems.get(product.id) ?? product;
    storedProduct.amount = amount;
    const newTotalPrice = [...newItems.values()].reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    newItems.set(product.id, storedProduct);
    return {
      items: newItems,
      totalPrice: newTotalPrice,
    };
  });

  const cartContextValue = useMemo(() => ({
    ...cartState,
    saveProduct,
  }), [cartState, saveProduct]);

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
