<script setup lang="ts">
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
  <div @click="toggle">{{ text }}</div>
</template>
