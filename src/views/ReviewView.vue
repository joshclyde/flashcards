<script setup lang="ts">
import HeadingOne from "@/components/HeadingOne.vue";
import FrontBackFlashcard from "@/components/FrontBackFlashcard.vue";
import Button from "@/components/ButtonDS.vue";
import Text from "@/components/TextDS.vue";
import Link from "@/components/LinkDS.vue";
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
  <Link to="/">Home</Link>
  <Text>{{ flashcardCurrentIndexMessage }}</Text>
  <FrontBackFlashcard :set-id="flashcardSetId" :index="state.index" />
  <Button :on-click="decrement" v-if="state.index > 0">Back</Button>
  <Button :on-click="increment" v-if="state.index < lengthOfSet - 1"
    >Next</Button
  >
  <Link to="/" v-if="state.index === lengthOfSet - 1">Finish</Link>
</template>
