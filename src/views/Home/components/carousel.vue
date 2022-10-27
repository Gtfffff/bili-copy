<script setup lang="ts">
import page from '/@/assets/jpg/miku6.jpg'
import { useStore } from '/@/store'
const { home } = useStore()
</script>

<template>
  <div class="rounded-lg overflow-hidden" m="t-4">
    <el-carousel trigger="click" height="420px">
      <el-carousel-item v-for="item in home.carousel" :key="item.id">
        <div class="relative w-full h-full">
          <img :src="page" class="block w-full h-full object-cover" />
          <div
            class="absolute bottom-0 w-full h-24 overflow-hidden bg-gradient-to-b from-transparent to-black pl-4"
          >
            <span
              class="block text-ellipsis whitespace-nowrap text-white font-normal text-[20px] leading-[25px] pt-5"
            >
              {{ item.title }}
            </span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped></style>
