<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useFlashcardsStore } from "@/stores/flashcards";

import LogoutLink from "@/components/LogoutLink.vue";
import HeadingTwo from "@/components/HeadingTwo.vue";

const flashcardsStore = useFlashcardsStore();
</script>

<template>
  <HeadingTwo>Review Sets</HeadingTwo>
  <RouterLink
    v-for="(value, key) in flashcardsStore.flashcardSets"
    :key="key"
    :to="`/review/${key}`"
  >
    {{ value.name }}
  </RouterLink>
  <HeadingTwo>Settings</HeadingTwo>
  <LogoutLink />
</template>
