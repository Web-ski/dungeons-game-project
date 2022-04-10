<script setup>
import { mapActions, mapState } from "pinia";
import { useBoardStore } from "@/stores/board.js";
import HeroElem from "../Hero/HeroElem.vue";
import MaterialElem from "../Materials/MaterialElem.vue";
import ThreatElem from "../Threats/ThreatElem.vue";
import BoardElem from "./BoardElem.vue";
import HeroKilledView from "../Hero/HeroKilledView.vue";
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
      v-for="elem in getMaterials()"
      :key="elem.id"
      :material="elem"
    />
    <threat-elem v-for="elem in getThreats()" :key="elem.id" :threat="elem" />
    <hero-killed-view />
  </div>
</template>

<script>
export default {
  components: { MaterialElem, ThreatElem, BoardElem, HeroElem, HeroKilledView },
  computed: {
    ...mapState(useBoardStore, [
      "getCurrentRoom",
      "getRoomMaterials",
      "getRoomThreats",
    ]),
  },
  methods: {
    ...mapActions(useBoardStore, ["setBoardSwitching"]),
    getRoomElems() {
      return this.getCurrentRoom;
    },
    getMaterials() {
      return this.getRoomMaterials;
    },
    getThreats() {
      return this.getRoomThreats;
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