import { defineStore } from "pinia";
import { ToolsClass } from "../class/tools.class";

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
        diamonds: 0,
        keys: [],
      },
    };
  },
  actions: {
    setHeroPosition(newPosition) {
      this.heroPosition = newPosition;
    },
    removeHeroKey(key) {
      const newKeysList = ToolsClass.makeProxyToObject(this.hero).keys;
      const keyIndex = newKeysList.indexOf(key);
      this.hero.keys.splice(keyIndex, 1);
    },
    setMaterialToHero(material) {
      material.type === "coin" && this.hero.coins++;
      material.type === "diamond" && this.hero.diamonds++;
      material.type.includes("key") && this.hero.keys.push(material.type);
      if (
        material.type === "bread" ||
        material.type === "life-potion" ||
        material.type === "cheese"
      ) {
        if (this.hero.live + material.live > this.hero.maxLive) {
          this.hero.live = this.hero.maxLive;
        } else {
          this.hero.live = this.hero.live + material.live;
        }
      }
    },
  },
  getters: {
    getHeroKeys: (state) => {
      return ToolsClass.makeProxyToObject(state.hero).keys;
    },
  },
});
