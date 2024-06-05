import { create } from "zustand";
import { Cart } from "../models/cart.model";
import { Book } from "../models/book.model";


interface StoreState {
  cart: Cart;
  setCart: (cart: Cart) => void;
  addToCart: (book : Book) => void;
}

export const useCartStore = create<StoreState>((set) => ({
  cart: {
    id: 0,
    cartsItems: [],
  },
  setCart: (cart) => {
    set({ cart });
  },
  addToCart: (book) => {
    set((state) => ({
        cart: {
            ...state.cart,
            cartItems: [
                ...state.cart.cartsItems,
                {
                    booksId: book.id,
                    amount: 1,
                    books: {
                        title: book.title,
                        author: {
                            name: book.author.name,
                            id: book.author.id,
                        },
                        category: {
                            name: book.category.name,
                            id: book.category.id,
                        },
                    }
                }
            ]
        },
    }));
  },
}));