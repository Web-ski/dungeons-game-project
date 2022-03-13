<script setup>
import { mapState } from "pinia";
import BoardElem from "./BoardElem.vue";
import { useBoardStore } from "@/stores/board.js";
</script>

<template>
  <div class="gameboard-main">
    <BoardElem v-for="elem in boardElems" :key="elem.id"></BoardElem>
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
      const elems = this.getCurrentRoom; // nie wywołuje się?
      console.log("view ", elems);
      this.boardElems = elems;
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