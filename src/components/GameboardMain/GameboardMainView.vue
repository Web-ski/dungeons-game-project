<script setup>
import { mapActions, mapState } from "pinia";
import HeroElem from "../Hero/HeroElem.vue";
import { useBoardStore } from "@/stores/board.js";
import MaterialElem from "../Materials/MaterialElem.vue";
import BoardElem from "./BoardElem.vue";
</script>

<template>
  <div class="gameboard-main">
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
  </div>
</template>

<script>
export default {
  components: { MaterialElem, BoardElem },
  computed: {
    ...mapState(useBoardStore, ["getCurrentRoom", "getRoomMaterials"]),
  },
  methods: {
    ...mapActions(useBoardStore, ["setBoardSwitching"]),
    getRoomElems() {
      return this.getCurrentRoom;
    },
    getMaterials() {
      return this.getRoomMaterials;
    },
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
    opacity: 1;
  }
}
</style>