import { createContext, ReactNode, useState } from 'react';
import { type Product } from '../lib';
export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};
const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cartContents, setCartContents] = useState<Product[]>([]);
  function addItem(item: Product) {
    setCartContents((prev) => [...prev, item]);
  }
  const cartContentValues = { cart: cartContents, addToCart: addItem };
  return (
    <CartContext.Provider value={cartContentValues}>
      {children}
    </CartContext.Provider>
  );
}
