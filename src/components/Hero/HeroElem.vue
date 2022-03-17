<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
</script>


<template>
  <div id="hero" :style="setHeroPosition()"></div>
</template>

<script>
export default {
  methods: {
    setHeroPosition() {
      console.log(this.heroPosition);
      return `left: 50px; top: 50px`;
    },
  },
  computed: {
    ...mapState(useHeroStore, ["heroPosition"]),
  },
};
</script>

<style scoped>
#hero {
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: red;
  transition: 0.5s;
}
</style>
