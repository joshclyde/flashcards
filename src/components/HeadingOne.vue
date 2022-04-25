<script setup lang="ts">
const props = defineProps<{ className?: string }>();
</script>

<template>
  <h1 :class="props.className"><slot /></h1>
</template>

<style>
h1 {
  color: var(--black-theme-white);
  margin: 16px 0;
}
</style>
