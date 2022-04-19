<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useFlashcardsStore } from "@/stores/flashcards";
import HeadingOne from "@/components/HeadingOne.vue";

const flashcardsStore = useFlashcardsStore();
</script>

<template>
  <main>
    <HeadingOne>Flashcards</HeadingOne>
    <nav>
      <RouterLink
        v-for="(value, key) in flashcardsStore.flashcardSets"
        :key="key"
        :to="`/review/${key}`"
      >
        {{ value.name }}
      </RouterLink>
    </nav>
  </main>
</template>
