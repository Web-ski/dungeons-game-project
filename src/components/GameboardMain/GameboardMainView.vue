<script setup>
import { mapActions, mapState } from "pinia";
<<<<<<< HEAD
import HeroElem from "../Hero/HeroElem.vue";
import { useBoardStore } from "@/stores/board.js";
import MaterialElem from "../Materials/MaterialElem.vue";
import BoardElem from "./BoardElem.vue";
=======
import BoardElem from "./BoardElem.vue";
import HeroElem from "../Hero/HeroElem.vue";
import { useBoardStore } from "@/stores/board.js";
>>>>>>> origin/master
</script>

<template>
  <div class="gameboard-main">
<<<<<<< HEAD
    <board-elem
      v-for="elem in getRoomElems()"
      :key="elem.id"
      :elem="elem"
    ></board-elem>
    <hero-elem />
    <material-elem
      v-for="material in getMaterials()"
      :key="material.id"
      :material="material"
    />
=======
    <BoardElem
      v-for="elem in getRoomElems()"
      :key="elem.id"
      :elem="elem"
    ></BoardElem>
    <HeroElem />
>>>>>>> origin/master
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  components: { MaterialElem, BoardElem },
  computed: {
    ...mapState(useBoardStore, ["getCurrentRoom", "getRoomMaterials"]),
=======
  computed: {
    ...mapState(useBoardStore, ["getCurrentRoom"]),
>>>>>>> origin/master
  },
  methods: {
    ...mapActions(useBoardStore, ["setBoardSwitching"]),
    getRoomElems() {
      return this.getCurrentRoom;
    },
<<<<<<< HEAD
    getMaterials() {
      return this.getRoomMaterials;
    },
=======
>>>>>>> origin/master
  },
  created() {
    this.setBoardSwitching(false);
  },
};
</script>

<style>
.gameboard-main {
  position: relative;
  width: 450px;
  height: 450px;
  margin: 0 auto;
  background-color: var(--dungeon-dark-cellar);
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