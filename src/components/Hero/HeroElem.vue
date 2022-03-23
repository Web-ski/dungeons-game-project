<script setup>
import { mapState, mapActions } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
import { useBoardStore } from "@/stores/board.js";
import { MovementClass } from "@/class/movement.class.js";
</script>


<template>
  <div
    id="hero"
    :style="'left: ' + getHeroPositionX() + '; ' + 'top: ' + getHeroPositionY()"
  ></div>
</template>

<script>
export default {
  methods: {
    ...mapActions(useBoardStore, ["setCurrentRoom"]),
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
        this.setCurrentRoom(crossedEntry.destination);
      }
    },
  },
  computed: {
    ...mapState(useHeroStore, ["heroPosition"]),
    ...mapState(useBoardStore, ["getRoomEntries"]),
  },
  updated() {
    this.switchBoard(this.heroPosition, this.getRoomEntries);
  },
};
</script>

<style scoped>
#hero {
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: red;
  transition: 0.3s;
}
</style>
