import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IProduct } from "@/lib/types";

interface CartItem {
  product: IProduct;
  quantity: number;
}

interface CartStore {
  items: CartItem[];

  addItem: (product: IProduct, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  totalItems: () => number;
  totalPrice: () => number;

  setUser: (userId: string | null) => void;
}

let activeUserId: string | null = null;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity = 1) => {
        set((state) => {
          const exists = state.items.find(
            (i) => String(i.product._id) === String(product._id)
          );

          if (exists) {
            return {
              items: state.items.map((i) =>
                String(i.product._id) === String(product._id)
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity }],
          };
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter(
            (i) => String(i.product._id) !== productId
          ),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((i) =>
            String(i.product._id) === productId
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((t, i) => t + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (t, i) => t + i.product.price * i.quantity,
          0
        ),

      // ✅ SAFE USER SWITCH (FIXED)
      setUser: (userId) => {
        activeUserId = userId;

        const key = userId ? `cart_${userId}` : "cart_guest";

        try {
          const saved = localStorage.getItem(key);

          const parsed = saved ? JSON.parse(saved) : [];

          // ✅ ALWAYS FORCE ARRAY
          const items = Array.isArray(parsed) ? parsed : [];

          set({ items });
        } catch (err) {
          console.error("Cart load error:", err);
          set({ items: [] });
        }
      },
    }),
    {
      name: "cart_base",
      storage: createJSONStorage(() => localStorage),

      // ✅ SAFE SAVE FORMAT (ONLY ARRAY)
      partialize: (state) => {
        const key = activeUserId ? `cart_${activeUserId}` : "cart_guest";

        try {
          localStorage.setItem(
            key,
            JSON.stringify(state.items || [])
          );
        } catch (err) {
          console.error("Cart save error:", err);
        }

        return state;
      },
    }
  )
);