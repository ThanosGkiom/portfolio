import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
  state: () => ({
    isMenuOpen: false,
  }),
  actions: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
