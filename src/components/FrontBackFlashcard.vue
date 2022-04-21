<script setup lang="ts">
import Text from "@/components/TextDS.vue";
import { useFlashcardsStore } from "@/stores/flashcards";
import { reactive, computed, watch } from "vue";
const props = defineProps<{ setId: string; index: number }>();
const state = reactive({ isFront: true });
const store = useFlashcardsStore();

watch(
  () => props.index,
  () => {
    state.isFront = true;
  }
);
watch(
  () => props.setId,
  () => {
    state.isFront = true;
  }
);

function toggle() {
  state.isFront = !state.isFront;
}

const text = computed(() => {
  return state.isFront
    ? store.getFrontOfCardByIndex(props.setId, props.index)
    : store.getBackOfCardByIndex(props.setId, props.index);
});
</script>

<template>
  <div @click="toggle">
    <Text>{{ text }}</Text>
  </div>
</template>

<style scoped>
div {
  background-color: var(--black-theme-secondary-black);
  margin: 16px 0;
  padding: 8px;
  border-radius: 2px;
  min-height: 128px;
}
</style>
