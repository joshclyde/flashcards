<script setup lang="ts">
import { FormKit } from "@formkit/vue";
const props = defineProps<{
  label: string;
  name: string;
  validation?: string;
}>();
</script>

<template>
  <FormKit
    :input-class="$style.Input"
    :label-class="$style.Label"
    :inner-class="$style.Inner"
    :message-class="$style.Message"
    type="text"
    :label="props.label"
    :name="props.name"
    :validation="props.validation"
  />
</template>

<style module>
.Input {
  height: 32px;
  background: none;
  border: 0.5px solid var(--black-theme-secondary-white);
  border-radius: 2px;
  font-size: 16px;
  color: var(--black-theme-secondary-white);
  padding-left: 8px;
}

.Input:hover {
  border-color: var(--black-theme-white);
  background-color: var(--black-theme-secondary-black);
}

.Input:active {
  border-color: var(--black-theme-white);
  color: var(--black-theme-white);
}

.Input:disabled {
  background-color: var(--black-theme-secondary-white);
  border-color: var(--black-theme-white);
  color: var(--black-theme-secondary-black);
  cursor: not-allowed;
}

.Label {
  color: var(--black-theme-secondary-white);
}

.Inner {
  margin: 2px 0 8px;
}

.Message {
  color: #e67878;
}
</style>
