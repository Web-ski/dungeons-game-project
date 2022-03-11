<script setup>
</script>

<template>
  <div class="gameboard-header">
    <div class="hero-data">
      <div>
        <div class="icon heart"></div>
        <p class="text">3</p>
      </div>
      <div>
        <div class="icon coin"></div>
        <p class="text">0</p>
      </div>
    </div>
  </div>
</template>

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