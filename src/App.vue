<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style>
@import "@/assets/base.css";
@import "@/assets/scss/style.scss";
</style>
