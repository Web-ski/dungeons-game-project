<script setup>
import PageMain from "../templates/PageMain.vue";
import { GAME_INFO } from "@/const/game-data.const";
</script>

<template>
  <PageMain>
    <h1>About the game project</h1>
    <section class="about-content">
      <p>
        The <strong>{{ GAME_INFO.title }}</strong> is a project of browser
        adventure game. The project was born in Dec 2020 and was initially
        created using vanilla javascript. In 2022, it was transferred to Vue3
        with Pinia and Vite,js.
      </p>
      <p>
        The author of the game is <strong>Paweł Nieczuja-Ostrowski</strong>,
        frontend developer and UX/UI designer. See more at
        <a
          href="https://www.linkedin.com/in/pawe%C5%82-nieczuja-ostrowski-6b084a88/"
          title="Link to the LinkedIn"
          >LinkedIn</a
        >.
      </p>
    </section>
  </PageMain>
</template>

<style scoped>
.about-content {
  max-width: 1000px;
  margin: 20px;
}

.about-content p {
  margin-bottom: 10px;
}

.about-content strong,
.about-content a {
  color: var(--dungeon-active);
}
</style>
