<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useFlashcardsStore } from "@/stores/flashcards";

const flashcardsStore = useFlashcardsStore();
</script>

<template>
  <RouterLink
    v-for="(value, key) in flashcardsStore.flashcardSets"
    :key="key"
    :to="`/review/${key}`"
  >
    {{ value.name }}
  </RouterLink>
</template>
