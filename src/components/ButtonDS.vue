<script setup lang="ts">
const props = defineProps<{ onClick: () => void; className?: string }>();
</script>

<template>
  <button :class="props.className" @click="props.onClick"><slot /></button>
</template>

<style scoped>
button {
  color: var(--black-theme-black);
  background-color: var(--black-theme-white);
  padding: 0 16px;
  height: 32px;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  /* Border was increasing the size of the element, so switched to box-shadow. */
  /* TODO: When making secondary button, use this. */
  /* -webkit-box-shadow: inset 0px 0px 0px 1px var(--primary-yellow);
  -moz-box-shadow: inset 0px 0px 0px 1px var(--primary-yellow);
  box-shadow: inset 0px 0px 0px 1px var(--primary-yellow); */
}

button:active,
button:hover {
  /* Turning off the box-shadow because the button will now be filled with a color. */
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

button:hover {
  background-color: var(--black-theme-secondary-white);
}

button:active {
  background-color: var(--black-theme-tertiary-white);
}
</style>
