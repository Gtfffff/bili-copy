<script setup lang="ts">
import bg from '/@/assets/jpg/miku3.jpg'
import logo from '/@/assets/png/logo.png'
</script>

<template>
  <div
    class="relative z-0 flex justify-center m-auto min-w-[1000px] min-h-[155px] h-[9.375vw] max-h-60 bg-center bg-cover bg-no-repeat bg-slate-400"
  >
    <!-- 背景图 -->
    <picture
      class="absolute object-cover inline-block leading-[1] w-full h-full align-middle bg-slate-100"
    >
      <img :src="bg" class="block w-full h-full object-cover object-top" />
    </picture>
    <!-- logo -->
    <div class="flex items-end px-24 max-w-[2270px] relative w-full h-full m-auto">
      <a href="" class="mb-[10px] z-[1] inline-block min-h-[60px] w-[180px] h-1/2">
        <img class="w-[162px] h-[78px]" :src="logo" />
      </a>
    </div>
    <!-- taper line -->
    <div
      class="absolute top-0 left-0 z-[0] w-full h-[100px] bg-transparent pointer-events-none"
    ></div>
  </div>
</template>

<style scoped></style>
