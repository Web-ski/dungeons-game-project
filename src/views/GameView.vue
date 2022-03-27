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
    ...mapState(useHeroStore, ["heroPosition"]),
  },
  methods: {
    ...mapActions(useBoardStore, ["getBoardFromApi", "openopenDoor"]),
    ...mapActions(useHeroStore, ["setHeroPosition"]),
    moveHero(event) {
      //dodać keyup globalnie dla document
      // console.log(this.heroPosition);
      event.stopPropagation();
      const letter = this.heroPosition.charAt(0);
      const letterPosition = COLUMN_LETTERS.indexOf(letter);
      const nmbr = parseInt(this.heroPosition.charAt(1));
      let destinatedPosition;

      switch (event.key) {
        case "w":
          destinatedPosition = COLUMN_LETTERS[letterPosition - 1] + nmbr;
          if (this.getBoardAvailablePositions.includes(destinatedPosition)) {
            this.setHeroPosition(destinatedPosition);
          } else {
            if (this.getClosedDoorsPostitons.includes(destinatedPosition)) {
              console.log(destinatedPosition);
            }
          }
          break;
        case "d":
          destinatedPosition = letter + (nmbr + 1);
          if (this.getBoardAvailablePositions.includes(destinatedPosition)) {
            this.setHeroPosition(destinatedPosition);
          } else {
            if (this.getClosedDoorsPostitons.includes(destinatedPosition)) {
              console.log(destinatedPosition);
            }
          }
          break;
        case "s":
          destinatedPosition = COLUMN_LETTERS[letterPosition + 1] + nmbr;
          if (this.getBoardAvailablePositions.includes(destinatedPosition)) {
            this.setHeroPosition(destinatedPosition);
          } else {
            if (this.getClosedDoorsPostitons.includes(destinatedPosition)) {
              console.log(destinatedPosition);
            }
          }
          break;
        case "a":
          destinatedPosition = letter + (nmbr - 1);
          if (this.getBoardAvailablePositions.includes(destinatedPosition)) {
            this.setHeroPosition(destinatedPosition);
          } else {
            if (this.getClosedDoorsPostitons.includes(destinatedPosition)) {
              console.log(destinatedPosition);

              // teraz sprawdzenie czy masz klucz?
              // jeśli tak to czy pasuje do drzwi
              // jeśli tak to usuwasz klucz z kieszeni
              // i podmieniasz drzwi na otwarte
            }
          }
          break;
        default:
          return false;
      }
      // trzeba z tego zrobić jedną funkcję
      // roomClosedDoors.length > 0 &&
      //   this.openDoor(
      //     InteractionClass.getHeroInteraction(
      //       this.heroPosition,
      //       event.key,
      //       roomClosedDoors
      //     )
      //   );

      // this.setHeroPosition(
      //   MovementClass.getHeroMove(
      //     this.heroPosition,
      //     event.key,
      //     this.getCurrentRoom
      //   )
      // );
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