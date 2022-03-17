<script setup>
import { mapState } from "pinia";
import PageMain from "../templates/PageMain.vue";
import GameboardHeaderView from "../components/GameboardHeader/GameboardHeaderView.vue";
import GameboardMainView from "../components/GameboardMain/GameboardMainView.vue";
import { useBoardStore } from "@/stores/board.js";
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
  },
  methods: {
    moveHero(event) {
      console.log(event);
      //dodać keyup globalnie dla document
    },
  },
};
</script>