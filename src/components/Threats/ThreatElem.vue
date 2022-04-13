<script setup>
import { mapState } from "pinia";
import { useBoardStore } from "@/stores/board.js";
import { ThreatClass } from "@/class/threat.class.js";
</script>

<template>
  <div
    :class="'threat ' + threat.type"
    v-if="!isBoardSwitching"
    :style="
      'background-image: url(images/game/threats/' +
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
  props: ["threat"],
  computed: {
    ...mapState(useBoardStore, ["isBoardSwitching"]),
  },
  methods: {
    setType() {
      return this.threat.type;
    },
    setPositionX() {
      return ThreatClass.setThreatPosition(this.threat.position, "horizontal");
    },
    setPositionY() {
      return ThreatClass.setThreatPosition(this.threat.position, "vertical");
    },
  },
};
</script>

<style scoped>
.threat {
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s;
}

.poison {
  height: 45px;
  width: 45px;
}
</style>