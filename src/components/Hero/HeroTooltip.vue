<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
import { HERO_DIALOG } from "@/const/dialog-data.const.js";
import { DialogClass } from "@/class/dialogs.class.js";
</script>

<template>
  <div v-if="isHeroDialog" id="dialog">
    {{ getHeroText() }}
  </div>
</template>

<script>
export default {
  computed: {
    ...mapState(useHeroStore, ["isHeroDialog", "heroDialogText"]),
  },
  methods: {
    getHeroText() {
      return DialogClass.chooseDialogText(HERO_DIALOG[this.heroDialogText]);
    },
  },
};
</script>

<style scoped>
#dialog {
  position: absolute;
  padding: 5px 10px;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  max-width: 200px;
  color: var(--dungeon-white);
  border: solid 2px var(--dungeon-gray);
  background-color: var(--dungeon-dark);
  border-radius: var(--button-radius);
  box-shadow: 0 0 5px var(--dungeon-active-dark);
  transition: 0.2s;
}
</style>