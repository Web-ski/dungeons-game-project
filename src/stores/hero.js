import { defineStore } from "pinia";

export const useHeroStore = defineStore("hero", {
  state: () => {
    return {
      heroPosition: "E4",
      hero: {
        name: "Janusz",
        lives: 3,
        live: 10,
        maxLive: 20,
        coins: 0,
        keys: [],
      },
    };
  },
  actions: {
    setHeroPosition(newPosition) {
      this.heroPosition = newPosition;
    },
    setMaterialToHero(material) {
      material.type === "coin" && this.hero.coins++;
      material.type.includes("key") && this.hero.keys.push(material.type);
      material.type === "bread" &&
        (this.hero.live = this.hero.live + material.live); // jeśli nie jest większy niż hero.live
      material.type === "life-potion" &&
        (this.hero.live = this.hero.live + material.live);
    },
  },
});
