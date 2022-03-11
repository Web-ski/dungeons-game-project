<script setup>
import PageMain from "../templates/PageMain.vue";
import GameboardHeaderView from "../components/GameboardHeader/GameboardHeaderView.vue";
import GameboardMainView from "../components/GameboardMain/GameboardMainView.vue";
</script>

<template>
  <PageMain>
    <section class="game">
      <GameboardHeaderView />
      <GameboardMainView />
    </section>
  </PageMain>
</template>