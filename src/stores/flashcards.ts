import { defineStore } from "pinia";

type FlashcardSets = Record<
  string,
  { name: string; flashcards: Record<string, { front: string; back: string }> }
>;

const flashcardSets: FlashcardSets = {
  xyz: {
    name: "CSS",
    flashcards: {
      a: {
        front: "This is the front for flashcard a",
        back: "This is the back for flashcard a",
      },
      b: {
        front: "This is the front for flashcard b",
        back: "This is the back for flashcard b",
      },
    },
  },
  abc: {
    name: "JavaScript",
    flashcards: {
      c: {
        front: "This is the front for flashcard c",
        back: "This is the back for flashcard c",
      },
    },
  },
  j: {
    name: "React",
    flashcards: {
      aaa: {
        front: "This is the front for flashcard aaa",
        back: "This is the back for flashcard aaa",
      },
      bbb: {
        front: "This is the front for flashcard bbb",
        back: "This is the back for flashcard bbb",
      },
      ccc: {
        front: "This is the front for flashcard ccc",
        back: "This is the back for flashcard ccc",
      },
    },
  },
};

export const useFlashcardsStore = defineStore({
  id: "flashcards",
  state: () => ({
    flashcardSets,
  }),
  getters: {
    getSetById: (state) => {
      return (setId: string) => state.flashcardSets[setId];
    },
    getLengthOfSetById: (state) => {
      return (setId: string) =>
        Object.keys(state.flashcardSets[setId].flashcards).length;
    },
    getFrontOfCard: (state) => {
      return (setId: string, cardId: string) =>
        state.flashcardSets[setId].flashcards[cardId].front;
    },
    getBackOfCard: (state) => {
      return (setId: string, cardId: string) =>
        state.flashcardSets[setId].flashcards[cardId].back;
    },
    getFrontOfCardByIndex: (state) => {
      return (setId: string, index: number) =>
        Object.values(state.flashcardSets[setId].flashcards)[index].front;
    },
    getBackOfCardByIndex: (state) => {
      return (setId: string, index: number) =>
        Object.values(state.flashcardSets[setId].flashcards)[index].back;
    },
  },
});
