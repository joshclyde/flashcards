<script setup lang="ts">
import { signInUserThroughGoogle } from "@/firebase";
import ButtonStyledLikeLink from "./ButtonStyledLikeLink.vue";
const onClick = () => signInUserThroughGoogle();
</script>

<template>
  <ButtonStyledLikeLink :on-click="onClick"
    >Login using Google</ButtonStyledLikeLink
  >
</template>
