<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{ to: string }>();
</script>

<template>
  <RouterLink class="hey" :to="props.to"><slot /></RouterLink>
</template>
