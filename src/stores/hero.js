import { defineStore } from "pinia";

export const useHeroStore = defineStore("hero", {
  state: () => {
    return {
      heroPosition: "E4",
      hero: {
        name: "Janusz",
        live: 3,
        coins: 0,
      },
    };
  },
  actions: {
    setHeroPosition(newPosition) {
      this.heroPosition = newPosition;
    },
    setMaterialToHero(material) {
      material.type === "coin" && this.hero.coins++;
    },
  },
});
