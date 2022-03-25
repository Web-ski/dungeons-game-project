<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
</script>

<template>
  <div class="gameboard-header">
    <div class="hero-data">
      <div>
        <div class="icon heart"></div>
        <p class="text">{{ getHeroLive() }}</p>
      </div>
      <div>
        <div class="icon coin"></div>
        <p class="text">{{ getHeroCoins() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    ...mapState(useHeroStore, ["hero"]),
  },
  methods: {
    getHeroLive() {
      return this.hero.live;
    },
    getHeroCoins() {
      return this.hero.coins;
    },
  },
};
</script>

<style scoped>
.gameboard-header {
  width: 450px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-data > div {
  display: flex;
}

.icon {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 0;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
}

.heart {
  background-image: url("../icons/drawn-heart-pink.svg");
}
.coin {
  background-image: url("../icons/coin-green.png");
}

.text {
  width: 25px;
  height: 25px;
  color: var(--dungeon-white);
  text-align: center;
}
</style>