<script setup>
import { mapState } from "pinia";
import { useHeroStore } from "@/stores/hero.js";
</script>

<template>
  <section class="gameboard-header">
    <div class="header-row">
      <div class="hero-data">
        <div>
          <div class="icon heart"></div>
          <p class="text">{{ getHeroLives() }}</p>
        </div>
        <div>
          <div class="icon coin"></div>
          <p class="text">{{ getHeroCoins() }}</p>
        </div>
      </div>
      <div class="hero-data">
        <div>
          <div
            :class="'icon ' + key"
            v-for="key in getHerokeys()"
            :key="key"
          ></div>
        </div>
      </div>
    </div>
    <div class="header-row">
      <label for="livebar"></label>
      <progress
        id="livebar"
        :max="getHeroMaxLive()"
        :value="getHeroLive()"
      ></progress>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    ...mapState(useHeroStore, ["hero"]),
  },
  methods: {
    getHeroLives() {
      return this.hero.lives;
    },
    getHeroCoins() {
      return this.hero.coins;
    },
    getHerokeys() {
      return this.hero.keys;
    },
    getHeroLive() {
      return this.hero.live;
    },
    getHeroMaxLive() {
      return this.hero.maxLive;
    },
  },
};
</script>

<style scoped>
progress {
  width: 100%;
  border-radius: var(--button-radius);
  height: 10px;
  margin: 5px;
}

progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
  appearance: none;
  transition: 0.5s;
}

progress[value]::-webkit-progress-bar {
  background-color: var(--dungeon-gray);
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

progress[value]::-webkit-progress-value {
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.3) inset;
  background-color: var(--dungeon-blood);
  border-radius: 2px 0 0 2px;
}

.gameboard-header {
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.header-row {
  width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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

.gold-key {
  background-image: url("/images/game/materials/gold-key.png");
}

.blue-key {
  background-image: url("/images/game/materials/blue-key.png");
}

.text {
  width: 25px;
  height: 25px;
  color: var(--dungeon-white);
  text-align: center;
}
</style>