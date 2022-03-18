<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
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
    getHeroPositionX() {
      return MovementClass.setHeroMove(this.heroPosition, "horizontal");
    },
    getHeroPositionY() {
      return MovementClass.setHeroMove(this.heroPosition, "vertical");
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
