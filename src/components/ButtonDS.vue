<script setup lang="ts">
const props = defineProps<{ onClick: () => void; className?: string }>();
</script>

<template>
  <button :class="props.className" class="button-common" @click="props.onClick">
    <slot />
  </button>
</template>
