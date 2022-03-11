<script setup>
import { GAME_INFO } from "../const/game-data.const";
import { RouterLink } from "vue-router";
import PageMain from "../templates/PageMain.vue";
</script>

<template>
  <PageMain>
    <section class="hero">
      <h1 class="app-title">{{ title }}</h1>
      <h2>Start the adventure!</h2>
      <RouterLink class="game-link" to="/game">Start</RouterLink>
    </section>
  </PageMain>
</template>

<script>
export default {
  data() {
    return {
      title: GAME_INFO.title,
    };
  },
};
</script>

<style>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-title {
  font-size: 2rem;
  line-height: 160%;
  margin-bottom: 1rem;
  animation: showTitle 2s;
}

h2,
.game-link {
  animation: showTitle 3s;
}

@keyframes showTitle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.game-link {
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: bold;
  color: var(--dungeon-dark);
  background-color: var(--dungeon-active);
  padding: 5px 20px 7px;
  margin: 20px;
  border-radius: var(--button-radius);
}
</style>
