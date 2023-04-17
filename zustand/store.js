import { create } from "zustand";

export const useBurgerMenuStore = create((set) => ({
  isActive: false,
  setIsActive: () => set((state) => ({ isActive: !state.isActive })),
}));

export const useSearchValue = create((set) => ({
  searchValue: "",
  setSearchValue: (value) => set((state) => ({ searchValue: value })),
}));

export const usePostDeletePopup = create((set) => ({
  isPostDeleting: false,
  isPopupOpening: false,
  setIsPostDeleting: (value) => set((state) => ({ isPostDeleting: value })),
  setIsPopupOpening: (value) => set((state) => ({ isPopupOpening: value })),
}));
