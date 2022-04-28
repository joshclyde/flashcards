<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useTagsStore } from "@/stores/tags";

import LogoutLink from "@/components/LogoutLink.vue";
import HeadingTwo from "@/components/HeadingTwo.vue";

const tagsStore = useTagsStore();
</script>

<template>
  <HeadingTwo>Data</HeadingTwo>
  <RouterLink to="/tags/create"> Create Tag </RouterLink>
  <HeadingTwo>Review Sets</HeadingTwo>
  <RouterLink
    v-for="(value, key) in tagsStore.tags"
    :key="key"
    :to="`/review/${key}`"
  >
    {{ value.name }}
  </RouterLink>
  <HeadingTwo>Settings</HeadingTwo>
  <LogoutLink />
</template>
