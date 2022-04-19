<script setup lang="ts">
import HeadingOne from "@/components/HeadingOne.vue";
import FrontBackFlashcard from "@/components/FrontBackFlashcard.vue";
import { useFlashcardsStore } from "@/stores/flashcards";
import { reactive, computed } from "vue";

const props = defineProps<{ flashcardSetId: string }>();
const state = reactive({ index: 0 });
const store = useFlashcardsStore();

function increment() {
  state.index++;
}

function decrement() {
  state.index--;
}

const lengthOfSet = computed(() => {
  return store.getLengthOfSetById(props.flashcardSetId);
});

const flashcardCurrentIndexMessage = computed(() => {
  return props.flashcardSetId ? `${state.index + 1}/${lengthOfSet.value}` : "";
});
</script>

<template>
  <HeadingOne>Reviewing Flashcards</HeadingOne>
  <RouterLink to="/">Home</RouterLink>
  <p>{{ flashcardCurrentIndexMessage }}</p>
  <FrontBackFlashcard :set-id="flashcardSetId" :index="state.index" />
  <button @click="decrement" v-if="state.index > 0">Previous</button>
  <button @click="increment" v-if="state.index < lengthOfSet - 1">Next</button>
  <RouterLink to="/" v-if="state.index === lengthOfSet - 1">Finish</RouterLink>
</template>
