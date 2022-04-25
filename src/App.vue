<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderDS from "@/components/HeaderDS.vue";
import FooterDS from "@/components/FooterDS.vue";
</script>

<template>
  <HeaderDS>Flashcards</HeaderDS>
  <main>
    <RouterView />
  </main>
  <FooterDS></FooterDS>
</template>

<style>
@import "@/assets/base.css";

main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
