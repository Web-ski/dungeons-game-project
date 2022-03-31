<script setup>
// import { BASE_URL } from "@/const/api.const.js";
</script>

<template>
  <div :id="elem.position" class="board-elem" :style="setUrl()"></div>
</template>

<script>
export default {
  props: ["elem"],
  methods: {
    setUrl() {
      return `background-image: url("images/game/cellar/${this.elem.type}.png")`;
      // return "background-image: url('/images/game/cellar/floor.png";
    },
  },
};
</script>

<style>
.board-elem {
  height: 50px;
  width: 50px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>