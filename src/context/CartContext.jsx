/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productKey = `${product.name}-${product.category}-${product.price}-${product.image} `;
      const existingProduct = prevCart.find((item) => item.key === productKey);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.key === productKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1, key: productKey }];
      }
    });
  };
  
  const decrementQuantity = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.name === name
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const isInCart = (productName) => {
    return cart.some((item) => item.name === productName);
  };

  const totalQuantity = cart.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const orderTotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const removeFromCart = (productKey) => {
    setCart((prevCart) => prevCart.filter((item) => item.key !== productKey));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        totalQuantity,
        orderTotal,
        removeFromCart,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
