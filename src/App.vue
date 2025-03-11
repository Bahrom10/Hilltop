<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";

const cardsData = localStorage.getItem("cards")
if (!cardsData || !Array.isArray(JSON.parse(cardsData) || [])) {
  localStorage.setItem("cards", JSON.stringify([]));
}
</script>

<style lang="scss" scoped></style>
