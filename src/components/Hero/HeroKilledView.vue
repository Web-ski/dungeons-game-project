<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
</script>

<template>
  <div class="killed-hero" v-if="isHeroKilled"><h2>You are dead!</h2></div>
</template>

<script>
export default {
  computed: {
    ...mapState(useHeroStore, ["isHeroKilled"]),
  },
};
</script>

<style scoped>
.killed-hero {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.killed-hero h2 {
  color: var(--dungeon-blood);
  font-weight: 900;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  animation: showText 1s;
}

@keyframes showText {
  from {
    height: 1%;
  }
  to {
    height: 100%;
  }
}
</style>