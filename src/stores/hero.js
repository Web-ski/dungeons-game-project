import { defineStore } from "pinia";

export const useHeroStore = defineStore("hero", {
  state: () => {
    return {
      heroPosition: "E4",
    };
  },
  actions: {
    moveHero(newPosition) {
      this.heroPosition = newPosition;
    },
  },
});
