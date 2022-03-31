<script setup>
import { mapState, mapActions } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
import { useBoardStore } from "@/stores/board.js";
import { MovementClass } from "@/class/movement.class.js";
</script>


<template>
  <div
    v-if="!isBoardSwitching"
    id="hero"
    :style="'left: ' + getHeroPositionX() + '; ' + 'top: ' + getHeroPositionY()"
  ></div>
</template>

<script>
export default {
  methods: {
    ...mapActions(useBoardStore, [
      "setCurrentRoom",
      "removeMaterialFromRoom",
      "setBoardSwitching",
    ]),
    ...mapActions(useHeroStore, ["setHeroPosition", "setMaterialToHero"]),
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
        //dać tu klasę!!!! bo są jeszcze inne możliwości przejścia do innego pomieszczenia
        this.setHeroPosition(
          MovementClass.setHeroLeaveBoard(crossedEntry.position)
        );
      }
    },
    takeMaterial(heroPosition, materials) {
      const [takenMaterial] = materials.filter(
        (material) => heroPosition === material.position
      );
      takenMaterial?.type && this.playSound(takenMaterial.type);
      takenMaterial && this.removeMaterialFromRoom(takenMaterial);
      takenMaterial && this.setMaterialToHero(takenMaterial);
    },
    playSound(soundName) {
      const audio = new Audio("audio/game/materials/" + soundName + ".wav");
      audio.play();
    },
  },
  computed: {
    ...mapState(useHeroStore, ["heroPosition"]),
    ...mapState(useBoardStore, [
      "getRoomEntries",
      "getRoomMaterials",
      "isBoardSwitching",
    ]),
  },
  updated() {
    this.takeMaterial(this.heroPosition, this.getRoomMaterials);
    this.switchBoard(this.heroPosition, this.getRoomEntries);
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
</style>
