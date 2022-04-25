<script setup lang="ts">
import { signOutUser } from "@/firebase";
import ButtonStyledLikeLink from "./ButtonStyledLikeLink.vue";
const onClick = () => signOutUser();
</script>

<template>
  <ButtonStyledLikeLink :on-click="onClick">Logout</ButtonStyledLikeLink>
</template>
