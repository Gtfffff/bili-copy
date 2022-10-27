<script setup lang="ts">
interface Props {
  text: string
  svg?: string
}
defineProps<Props>()
</script>

<template>
  <div class="group-hover:animate-bounce" v-html="svg"></div>
  <span class="navFont">{{ text }}</span>
</template>

<style scoped></style>
