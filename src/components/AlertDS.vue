<script setup lang="ts">
import IconCheckmark from "./IconCheckmark.vue";
import TextDS from "./TextDS.vue";
</script>

<template>
  <div class="Container">
    <IconCheckmark class="Icon"></IconCheckmark>
    <TextDS class="Title">Success</TextDS>
    <TextDS class="Body">
      <slot></slot>
    </TextDS>
  </div>
</template>

<style scoped>
.Container {
  display: grid;
  grid-template-columns: 32px auto;
  grid-template-rows: 32px minmax(32px, auto);
  background-color: var(--black-theme-secondary-black);
  border: solid var(--black-theme-success);
  border-width: 0.5px 4px;
  border-radius: 2px;
  width: 512px;
}

.Icon {
  grid-column: 1;
  grid-row: 1;
  justify-self: center;
  align-self: center;
}

.Title {
  grid-column: 2;
  grid-row: 1;
  font-weight: bold;
  align-self: center;
}

.Body {
  grid-column: 2;
  grid-row: 2;
  align-self: center;
  padding: 8px 0;
}
</style>
