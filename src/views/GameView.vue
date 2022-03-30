<script setup>
import { mapActions, mapState } from "pinia";
import PageMain from "../templates/PageMain.vue";
import GameboardHeaderView from "../components/GameboardHeader/GameboardHeaderView.vue";
import GameboardMainView from "../components/GameboardMain/GameboardMainView.vue";
import { useBoardStore } from "@/stores/board.js";
import { useHeroStore } from "@/stores/hero.js";
// import { MovementClass } from "@/class/movement.class.js";
// import { InteractionClass } from "@/class/interaction.class.js";
import { COLUMN_LETTERS } from "@/const/board-data.const";
</script>

<template>
  <div v-if="isProcessing">Game loading...</div>
  <PageMain v-if="!isProcessing">
    <section class="game">
      <GameboardHeaderView />
      <GameboardMainView />
    </section>
  </PageMain>
</template>

<script>
export default {
  computed: {
    ...mapState(useBoardStore, [
      "isProcessing",
      "getCurrentRoom",
      "getRoomEntries",
      "getClosedDoorsPostitons",
      "getBoardAvailablePositions",
    ]),
    ...mapState(useHeroStore, ["heroPosition", "getHeroKeys"]),
  },
  methods: {
    ...mapActions(useBoardStore, ["getBoardFromApi", "openDoor"]),
    ...mapActions(useHeroStore, ["setHeroPosition", "removeHeroKey"]),
    checkHeroMove(destination) {
      if (this.getBoardAvailablePositions.includes(destination)) {
        this.setHeroPosition(destination);
      } else {
        if (this.getClosedDoorsPostitons.includes(destination)) {
          if (this.getHeroKeys.length > 0) {
            const [closedDoor] = this.getRoomEntries.filter(
              (door) => door.position === destination
            );
            const isKey = this.getHeroKeys.includes(closedDoor.key);
            isKey && console.log("Mam klucz!");
            isKey && this.removeHeroKey(closedDoor.key);
            isKey && this.openDoor(closedDoor);
          }
        }
      }
    },
    moveHero(event) {
      event.stopPropagation();
      const letter = this.heroPosition.charAt(0);
      const letterPosition = COLUMN_LETTERS.indexOf(letter);
      const nmbr = parseInt(this.heroPosition.charAt(1));
      let destinatedPosition;

      switch (event.key) {
        case "w":
          destinatedPosition = COLUMN_LETTERS[letterPosition - 1] + nmbr;
          this.checkHeroMove(destinatedPosition);
          break;
        case "d":
          destinatedPosition = letter + (nmbr + 1);
          this.checkHeroMove(destinatedPosition);
          break;
        case "s":
          destinatedPosition = COLUMN_LETTERS[letterPosition + 1] + nmbr;
          this.checkHeroMove(destinatedPosition);
          break;
        case "a":
          destinatedPosition = letter + (nmbr - 1);
          this.checkHeroMove(destinatedPosition);
          break;
        default:
          return false;
      }
    },
  },
  created() {
    this.getBoardFromApi();
    window.addEventListener("keyup", this.moveHero);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.moveHero);
  },
};
</script>