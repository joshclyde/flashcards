<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderDS from "@/components/HeaderDS.vue";
import FooterDS from "@/components/FooterDS.vue";
import { useAuthStore, useStartAuthListener } from "@/stores/auth";
import { computed } from "vue";
import LoginLink from "@/components/LoginLink.vue";
import TextDS from "./components/TextDS.vue";

useStartAuthListener();
const authStore = useAuthStore();
const pending = computed(() => authStore.loading === "PENDING");
const success = computed(() => authStore.loading === "SUCCESS");
const error = computed(() => authStore.loading === "ERROR");
const isAuthenticated = computed(() => authStore.isAuthenticated);
</script>

<template>
  <HeaderDS></HeaderDS>
  <main>
    <!-- <RouterView /> -->
    <TextDS v-if="pending">Checking login status...</TextDS>
    <TextDS v-if="error"
      >Something bad happened when trying to check login status.</TextDS
    >
    <RouterView v-if="success && isAuthenticated" />
    <div v-if="success && !isAuthenticated">
      <TextDS>You are not logged in.</TextDS>
      <LoginLink />
    </div>
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
