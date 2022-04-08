<script setup>
import { mapState, mapActions } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
import { useBoardStore } from "@/stores/board.js";
import { MovementClass } from "@/class/movement.class.js";
import HeroTooltip from "./HeroTooltip.vue";
</script>


<template>
  <div
    v-if="!isBoardSwitching"
    id="hero"
    :class="{ hurting: isHurting }"
    :style="'left: ' + getHeroPositionX() + '; ' + 'top: ' + getHeroPositionY()"
  >
    <hero-tooltip />
  </div>
</template>

<script>
export default {
  components: { HeroTooltip },
  data() {
    return {
      isMoving: false,
      isHurting: false,
    };
  },
  computed: {
    ...mapState(useHeroStore, ["heroPosition"]),
    ...mapState(useBoardStore, [
      "getRoomEntries",
      "getRoomMaterials",
      "getRoomThreats",
      "isBoardSwitching",
    ]),
    getHeroDestination() {
      // `this` points to the component instance
      console.log("getHeroMove!!!!");
      return this.heroMove();
    },
  },
  methods: {
    ...mapActions(useBoardStore, [
      "setCurrentRoom",
      "removeMaterialFromRoom",
      "setBoardSwitching",
    ]),
    ...mapActions(useHeroStore, [
      "setHeroPosition",
      "setMaterialToHero",
      "setThreatAffectHero",
    ]),
    heroMove() {
      console.log("heroMove");
      this.takeMaterial(this.heroPosition, this.getRoomMaterials);
      this.getThreat(this.heroPosition, this.getRoomThreats);
      this.switchBoard(this.heroPosition, this.getRoomEntries);
    },
    getHeroPositionX() {
      return MovementClass.setHeroMove(this.heroPosition, "horizontal");
    },
    getHeroPositionY() {
      return MovementClass.setHeroMove(this.heroPosition, "vertical");
    },
    switchBoard(heroPosition, entries) {
      const [crossedEntry] = entries.filter(
        (entry) => heroPosition === entry.position
      );
      if (crossedEntry?.destination) {
        this.setBoardSwitching(true);
        this.setCurrentRoom(crossedEntry.destination);
        this.setHeroPosition(
          MovementClass.setHeroLeaveBoard(crossedEntry.position)
        );
      }
    },
    takeMaterial(heroPosition, materials) {
      const audioCoin = new Audio("audio/game/materials/coin.wav");
      const audioKey = new Audio("audio/game/materials/key.wav");
      const audioFood = new Audio("audio/game/materials/food.wav");
      const audioDrink = new Audio("audio/game/materials/drink.wav");
      const audioTreasure = new Audio("audio/game/materials/diamond.wav");
      const [takenMaterial] = materials.filter(
        (material) => heroPosition === material.position
      );
      if (takenMaterial) {
        switch (takenMaterial?.type) {
          case "coin":
            audioCoin.play();
            break;
          case "blue-key":
          case "gold-key":
            audioKey.play();
            break;
          case "cheese":
          case "bread":
            audioFood.play();
            break;
          case "life-potion":
            audioDrink.play();
            break;
          case "diamond":
            audioTreasure.play();
            break;
          default:
            audioCoin.play();
        }
        this.removeMaterialFromRoom(takenMaterial);
        this.setMaterialToHero(takenMaterial);
      }
    },
    getThreat(heroPosition, threats) {
      console.log("getThreat");
      const audioHurt = new Audio("audio/game/hero/hurt.wav");
      this.isHurting && (this.isHurting = false);
      const [gotThreat] = threats.filter(
        (threat) => heroPosition === threat.position
      );
      if (gotThreat) {
        this.setThreatAffectHero(gotThreat);
        audioHurt.play();
        this.isHurting = true;
        setTimeout(
          () => this.getThreat(this.heroPosition, this.getRoomThreats),
          gotThreat.time * 100 //dlaczego odpala to po dwa razy?????
        );
      }
    },
  },
  updated() {
    // this.isHurting && (this.isHurting = false);
    console.log("----updated");
    !this.isHurting && this.getHeroDestination;
  },
  created() {
    console.time();
  },
};
</script>

<style scoped>
#hero {
  position: absolute;
  height: 54px;
  width: 54px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/images/game/heros/hero-dev2.png");
  transition: 0.3s;
  z-index: 100;
}

.hurting {
  animation: setHurting 1s infinite;
}

@keyframes setHurting {
  from {
    filter: hue-rotate(90deg);
  }
  to {
    filter: none;
  }
}
</style>
