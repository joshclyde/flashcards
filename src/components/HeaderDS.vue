<script setup lang="ts">
import HeadingOne from "./HeadingOne.vue";
import LineBreak from "./LineBreak.vue";
import LinkDS from "./LinkDS.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const text = computed(() => {
  switch (true) {
    case route.name === "home":
      return "Memory";
    case route.name === "review":
      return "Reviewing Flashcards";
    case route.name === "tags_create":
      return "Create Tag";
    default:
      return "Flashcards";
  }
});

const routesWithoutHomeLink = ["home"];
const shouldDisplayHomeLink = computed(() => {
  return route.name
    ? !routesWithoutHomeLink.includes(route.name.toString())
    : true;
});
</script>

<template>
  <header>
    <div class="Heading-Container">
      <HeadingOne class-name="Heading">{{ text }}</HeadingOne>
      <LinkDS v-if="shouldDisplayHomeLink" to="/">Home</LinkDS>
    </div>
    <LineBreak />
  </header>
</template>

<style scoped>
header {
  margin: 24px 0;
}

.Heading-Container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.Heading {
  margin-bottom: 24px;
}
</style>
