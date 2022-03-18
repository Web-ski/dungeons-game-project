<script setup>
import { mapActions, mapState } from "pinia";
import PageMain from "../templates/PageMain.vue";
import GameboardHeaderView from "../components/GameboardHeader/GameboardHeaderView.vue";
import GameboardMainView from "../components/GameboardMain/GameboardMainView.vue";
import { useBoardStore } from "@/stores/board.js";
import { useHeroStore } from "@/stores/hero.js";
import { MovementClass } from "@/class/movement.class.js";
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
    ...mapState(useBoardStore, ["isProcessing"]),
    ...mapState(useHeroStore, ["heroPosition"]),
  },
  methods: {
    ...mapActions(useHeroStore, ["setHeroPosition"]),
    moveHero(event) {
      //dodać keyup globalnie dla document
      // console.log(this.heroPosition);
      event.stopPropagation();
      this.setHeroPosition(
        MovementClass.getHeroMove(this.heroPosition, event.key)
      );
    },
  },
  created() {
    window.addEventListener("keyup", this.moveHero);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.moveHero);
  },
};
</script>