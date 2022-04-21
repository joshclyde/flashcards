<script setup lang="ts">
const props = defineProps<{ onClick: () => void; className?: string }>();
</script>

<template>
  <button :class="props.className" @click="props.onClick"><slot /></button>
</template>

<style scoped>
button {
  color: var(--primary-yellow);
  background-color: var(--black-theme-secondary-black);
  /* border: 1px solid var(--primary-yellow);
  border-radius: 2px; */
  padding: 0 8px;
  height: 32px;
  border: none;
  border-radius: 2px;

  /* Border was increasing the size of the element, so switched to box-shadow. */
  -webkit-box-shadow: inset 0px 0px 0px 1px var(--primary-yellow);
  -moz-box-shadow: inset 0px 0px 0px 1px var(--primary-yellow);
  box-shadow: inset 0px 0px 0px 1px var(--primary-yellow);
  cursor: pointer;
}

button:active,
button:hover {
  /* Turning off the box-shadow because the button will now be filled with a color. */
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

button:hover {
  background-color: var(--primary-yellow);
  color: var(--black-theme-secondary-black);
}

button:active {
  background-color: var(--primary-dark-yellow);
}
</style>
