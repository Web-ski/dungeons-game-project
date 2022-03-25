<script setup>
import { mapState } from "pinia";
import { useBoardStore } from "@/stores/board.js";
import { MaterialClass } from "@/class/material.class.js";
</script>

<template>
  <div
    class="material"
    v-if="!isBoardSwitching"
    :style="
      'background-image: url(/images/game/materials/' +
      setType() +
      '.png); left: ' +
      setPositionX() +
      '; ' +
      'top: ' +
      setPositionY()
    "
  ></div>
</template>

<script>
export default {
  props: ["material"],
  computed: {
    ...mapState(useBoardStore, ["isBoardSwitching"]),
  },
  methods: {
    setType() {
      console.log(this.material);
      return this.material.type;
    },
    setPositionX() {
      return MaterialClass.setMaterialPosition(
        this.material.position,
        "horizontal"
      );
    },
    setPositionY() {
      return MaterialClass.setMaterialPosition(
        this.material.position,
        "vertical"
      );
    },
  },
};
</script>

<style scoped>
.material {
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s;
}
</style>