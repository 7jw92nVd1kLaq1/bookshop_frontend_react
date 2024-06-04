import { create } from "zustand";


interface StoreState {
  isLoggedIn: boolean;
  token: string;
  storeLogin: (token: string) => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  token: "",
  storeLogin: (token: string) => { 
    set({ isLoggedIn: true, token: token}) 
  },
  storeLogout: () => set({ isLoggedIn: false, token: ""}),
}));