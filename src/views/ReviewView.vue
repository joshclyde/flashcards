<script setup lang="ts">
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
  <div class="Container">
    <Text>{{ flashcardCurrentIndexMessage }}</Text>
    <FrontBackFlashcard :set-id="flashcardSetId" :index="state.index" />
    <div class="Button-Container">
      <Button
        v-if="state.index > 0"
        :on-click="decrement"
        className="Back-Button"
        >Back</Button
      >
      <div></div>
      <Button
        v-if="state.index < lengthOfSet - 1"
        :on-click="increment"
        className="Next-Button"
        >Next</Button
      >
      <Link
        v-if="state.index === lengthOfSet - 1"
        to="/"
        className="Finish-Link"
        >Finish</Link
      >
    </div>
  </div>
</template>

<style scoped>
.Container {
  display: flex;
  flex-direction: column;
}

.Button-Container {
  display: grid;
  grid-template-columns: [first] 128px 1fr [last] 128px;
  gap: 16px;
}

.Back-Button {
  grid-column-start: first;
}

.Next-Button {
  grid-column-start: last;
}

.Finish-Link {
  grid-column-start: last;
  justify-self: center;
}
</style>
