<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useFlashcardsStore } from "@/stores/flashcards";
import HeadingOne from "@/components/HeadingOne.vue";

const flashcardsStore = useFlashcardsStore();
</script>

<template>
  <main>
    <HeadingOne>Flashcards</HeadingOne>
    <RouterLink
      v-for="(value, key) in flashcardsStore.flashcardSets"
      :key="key"
      :to="`/review/${key}`"
    >
      {{ value.name }}
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
