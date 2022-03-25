<template>
  <main class="page-main">
    <slot />
  </main>
</template>

<style>
.page-main {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>