import { create } from "zustand"
import { persist } from "zustand/middleware"

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
  error: null,

  addToCart: (product) => {
    const { items } = get()
    const existingItem = items.find((item) => item.id === product.id)

    if (existingItem) {
      set({ error: "This item is already in your cart!" })
      return
    }

    set((state) => ({
      items: [...state.items, { ...product, quantity: 1 }],
      error: null,
    }))
  },

      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
        })),

      clearCart: () => set({ items: [] }),

      getCartTotal: () => {
        const items = get().items
        return items.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      getCartCount: () => {
        const items = get().items
        return items.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)

export default useCartStore

