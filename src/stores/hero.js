import { defineStore } from "pinia";
import { ToolsClass } from "../class/tools.class";
import { BASE_URL } from "@/const/api.const.js";
import { useBoardStore } from "@/stores/board.js";

export const useHeroStore = defineStore("hero", {
  state: () => {
    return {
      heroes: [],
      hero: null,
      heroPosition: "E4",
      isHeroDialog: false,
      heroDialogText: "initial",
      isHeroKilled: false,
    };
  },
  actions: {
    getHeroFromApi() {
      fetch(BASE_URL + "mocks/heroes.json")
        .then((response) => response.json())
        .then((data) => this.setDataToStore(data.heroes));
    },
    setDataToStore(heroes) {
      this.heroes = heroes;
      this.hero = this.heroes[0];
    },
    setIsHeroDialog(value) {
      this.isHeroDialog = value;
    },
    setHeroDialogText(text) {
      this.heroDialogText = text;
    },
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
    setThreatAffectHero(threat) {
      if (!this.isHeroKilled) {
        if (threat.type === "poison") {
          if (this.hero.live - threat.injury <= 0) {
            this.hero.live = 0;
            this.hero.lives === 0 ? 0 : this.hero.lives--;
            this.setHeroKilled();
          } else {
            this.hero.live = this.hero.live - threat.injury;
          }
        }
      }
    },
    setHeroKilled() {
      this.isHeroKilled = true;
      setTimeout(() => this.setHeroRespawn(), 2000);
    },
    setHeroRespawn() {
      const board = useBoardStore();
      board.setBoardSwitching(false);
      board.setCurrentRoom("b1");
      this.setHeroPosition("E4");
      this.hero.live = this.hero.maxLive;
      this.isHeroKilled = false;
    },
  },
  getters: {
    getHeroKeys: (state) => {
      return ToolsClass.makeProxyToObject(state.hero).keys;
    },
  },
});
