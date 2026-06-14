import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '@/data/products';

interface CartItem { product: Product; qty: number }

interface CartCtx {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  count: number;
}

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (product: Product) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.product.id === product.id);
      if (ex) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { product, qty: 1 }];
    });
  };

  const remove = (id: string) => setItems((p) => p.filter((i) => i.product.id !== id));

  return (
    <CartContext.Provider value={{ items, add, remove, count: items.reduce((a, i) => a + i.qty, 0) }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart required');
  return ctx;
}
