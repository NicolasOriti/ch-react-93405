import { createContext, useReducer, useEffect } from 'react';

import { cartReducer, initialState } from './cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    const persistedState = localStorage.getItem('cartState');
    return persistedState ? { items: JSON.parse(persistedState) } : init;
  });

  useEffect(() => {
    localStorage.setItem('cartState', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });

  const removeFromCart = (productId) => dispatch({ type: 'REMOVE_FROM_CART', payload: productId });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const total = state.items.reduce((acc, item) => acc + item.price, 0);

  const totalItems = state.items.length;

  const value = {
    items: state.items,
    totalItems,
    addToCart,
    removeFromCart,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
