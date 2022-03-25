<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="app-header">
    <nav class="app-nav">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style>
.app-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.app-nav .nav-link {
  text-decoration: none;
  color: var(--dungeon-active);
  padding: 5px 12px;
  margin: 0 20px;
  border: solid 2px transparent;
}

.app-nav .nav-link.active-link {
  color: var(--dungeon-active);
  border-radius: var(--button-radius);
  border-color: var(--dungeon-active-dark);
}
</style>
