import { create } from "zustand";

export const useBurgerMenuStore = create((set) => ({
  isActive: false,
  setIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));

export const useSearchValue = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set((state) => ({ searchValue: value })),
}));
