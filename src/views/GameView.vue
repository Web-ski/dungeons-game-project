<script setup>
import { mapActions, mapState } from "pinia";
import PageMain from "../templates/PageMain.vue";
import GameboardHeaderView from "../components/GameboardHeader/GameboardHeaderView.vue";
import GameboardMainView from "../components/GameboardMain/GameboardMainView.vue";
import { useBoardStore } from "@/stores/board.js";
import { useHeroStore } from "@/stores/hero.js";
import { COLUMN_LETTERS } from "@/const/board-data.const";
</script>

<template>
  <div v-if="isProcessing">Game loading...</div>
  <PageMain v-if="!isProcessing">
    <section class="game">
      <gameboard-header-view />
      <gameboard-main-view />
      <aside id="mobile-move-console">
        <div>
          <button class="btn top" @click="moveHeroByConsole('w')">
            &#8593;
          </button>
        </div>
        <div>
          <button class="btn left" @click="moveHeroByConsole('a')">
            &#8592;
          </button>
          <button class="btn right" @click="moveHeroByConsole('d')">
            &#8594;
          </button>
        </div>
        <div>
          <button class="btn down" @click="moveHeroByConsole('s')">
            &#8595;
          </button>
        </div>
      </aside>
    </section>
  </PageMain>
</template>

<script>
export default {
  components: { GameboardHeaderView, GameboardMainView },
  computed: {
    ...mapState(useBoardStore, [
      "isProcessing",
      "getCurrentRoom",
      "getRoomEntries",
      "getClosedDoorsPostitons",
      "getBoardAvailablePositions",
    ]),
    ...mapState(useHeroStore, ["heroPosition", "getHeroKeys", "isHeroDialog"]),
  },
  methods: {
    ...mapActions(useBoardStore, ["getBoardFromApi", "openDoor"]),
    ...mapActions(useHeroStore, [
      "setHeroPosition",
      "removeHeroKey",
      "setIsHeroDialog",
      "setHeroDialogText",
    ]),
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
            // isKey && console.log("Mam klucz!");
            isKey && this.removeHeroKey(closedDoor.key);
            isKey && this.openDoor(closedDoor);
            isKey && this.setHeroDialogText("openedDoor");
            isKey && this.setIsHeroDialog(true);
            !isKey && this.setHeroDialogText("wrongKey");
            !isKey && this.setIsHeroDialog(true);
          } else {
            this.setHeroDialogText("closedDoor");
            this.setIsHeroDialog(true);
          }
        }
      }
    },
    moveHeroByConsole(clickedLetter) {
      this.moveHero(clickedLetter);
    },
    moveHeroByKeyboard(event) {
      event.stopPropagation();
      this.moveHero(event.key);
    },
    moveHero(choosenKey) {
      const letter = this.heroPosition.charAt(0);
      const letterPosition = COLUMN_LETTERS.indexOf(letter);
      const nmbr = parseInt(this.heroPosition.charAt(1));
      let destinatedPosition;
      this.isHeroDialog && this.setIsHeroDialog(false);

      switch (choosenKey) {
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
    window.addEventListener("keyup", this.moveHeroByKeyboard);
    this.setIsHeroDialog(true);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.moveHeroByKeyboard);
  },
};
</script>

<style scoped>
#mobile-move-console {
  position: absolute;
  bottom: -150px;
  margin-left: 25px;
  height: 160px;
  width: 160px;
  display: flex;
  flex-direction: column;
}

#mobile-move-console > div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#mobile-move-console > div:nth-of-type(2) {
  justify-content: space-around;
}

#mobile-move-console > div > .btn {
  display: block;
  border: none;
  color: var(--dungeon-white);
  background-color: rgba(255, 255, 255, 0.2);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  line-height: 100%;
  transition: 0.2s;
}

#mobile-move-console > div > .btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

@media screen and (min-width: 450px) {
  #mobile-move-console {
    display: none;
  }
}
</style>