<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-3">
    <!-- 头部 -->
    <header class="flex justify-between h-5">
      <div class="bg-gray-100 w-14 rounded-md"></div>
      <div class="bg-gray-100 w-14 rounded-md"></div>
    </header>

    <!-- 榜首 -->
    <div class="grid grid-cols-3 grid-rows-2 h-14">
      <div class="row-span-2 rounded-md bg-gray-100 mr-2"></div>
      <div class="col-span-2 bg-gray-100 w-full h-5 rounded-md"></div>
      <div class="col-span-2 bg-gray-100 w-14 h-5 rounded-md"></div>
    </div>
    <!-- 版单 -->
    <div v-for="item in 4" :key="item" class="bg-gray-100 w-full h-5 rounded-md"></div>
  </div>
</template>

<style scoped></style>
