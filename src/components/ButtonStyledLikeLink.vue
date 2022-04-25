<script setup lang="ts">
const props = defineProps<{ onClick: () => void; className?: string }>();
</script>

<template>
  <button :class="props.className" @click="props.onClick"><slot /></button>
</template>

<style scoped>
button {
  color: var(--black-theme-digital-blue);
  width: fit-content;
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  color: #a5daf9;
}
button:active {
  color: #a1a8e8;
}
</style>
