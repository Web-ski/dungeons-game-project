<script setup>
import { mapState } from "pinia";
import BoardElem from "./BoardElem.vue";
import HeroElem from "../Hero/HeroElem.vue";
import { useBoardStore } from "@/stores/board.js";
</script>

<template>
  <div class="gameboard-main">
    <BoardElem
      v-for="elem in boardElems"
      :key="elem.id"
      :elem="elem"
    ></BoardElem>
    <HeroElem />
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardElems: [],
    };
  },
  computed: {
    ...mapState(useBoardStore, ["getCurrentRoom"]),
  },
  methods: {
    getRoomElems() {
      this.boardElems = this.getCurrentRoom;
    },
  },
  created() {
    this.getRoomElems();
  },
};
</script>

<style>
.gameboard-main {
  position: relative;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  background-color: var(--dungeon-dark);
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  animation: roomDisplay 1s;
}

@keyframes roomDisplay {
  from {
    opacity: 0;
  }
  to {
    opaciyt: 1;
  }
}
</style>