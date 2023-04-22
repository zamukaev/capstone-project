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
export const useAuthMe = create((set) => ({
  isAuth: false,
  user: {},
  setIsAuth: (value) => set((state) => ({ isAuth: Boolean(value) })),
  setUser: (value) => set((state) => ({ user: value })),
}));
