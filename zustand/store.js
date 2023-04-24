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
  isPostDeleted: false,
  isPopupOpening: false,
  setIsPostDeleted: (value) => set((state) => ({ isPostDeleted: value })),
  setIsPopupOpening: (value) => set((state) => ({ isPopupOpening: value })),
}));
export const useAuthorizationMe = create((set) => ({
  isAuthorized: false,
  user: {},
  setIsAuthorized: (value) =>
    set((state) => ({ isAuthorized: Boolean(value) })),
  setUser: (value) => set((state) => ({ user: value })),
}));
