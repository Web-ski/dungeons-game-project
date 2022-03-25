<script setup>
import { mapState } from "pinia";
import { useBoardStore } from "@/stores/board.js";
</script>

<template>
  <div v-if="!isBoardSwitching">{{ this.material }}</div>
</template>

<script>
export default {
  props: ["material"],
  computed: {
    ...mapState(useBoardStore, ["isBoardSwitching"]),
  },
};
</script>