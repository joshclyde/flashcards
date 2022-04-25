<script setup lang="ts">
const props = defineProps<{ className?: string }>();
</script>

<template>
  <h2 :class="props.className"><slot /></h2>
</template>

<style>
h2 {
  color: var(--black-theme-white);
  margin: 16px 0;
}
</style>
