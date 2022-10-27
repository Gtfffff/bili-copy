<script setup lang="ts">
import cover from '/@/assets/jpg/miku3.jpg'
import v from '/@/assets/video/miku1.mp4'
import player from '../../../componments/Video/VideoCard.vue'
import Skeleton from '/@/componments/Skeleton/feed-card-skeleton-I.vue'
import { ref } from 'vue'
import { vElementHover } from '@vueuse/components'

interface props {
  title: string
  up: string
  w: string
  barrage: string
  mn: string
  cover: string
  url: string
  date: string
}
defineProps<props>()

const show = ref(false)
function onHover(state: boolean) {
  show.value = state
}
</script>

<template>
  <template v-if="!title">
    <Skeleton />
  </template>
  <template v-else>
    <div class="flex flex-col">
      <!-- 封面 -->
      <div v-show="!show" v-element-hover="onHover" class="relative z-[1] rounded-md h-40">
        <picture class="absolute top-0 left-0 z-[1] overflow-hidden w-full h-full rounded-md">
          <!-- 封面 -->
          <img :src="cover" class="block w-full h-full object-cover" />
          <!-- 悬浮信息 -->
          <div
            class="absolute flex items-center justify-between w-full inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black h-6 pr-2"
          >
            <!-- 左 -->
            <div class="flex items-center text-gray-100 text-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
              <span class="mr-2">{{ w }}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <span>{{ barrage }}</span>
            </div>

            <!-- 右 -->
            <div class="text-gray-100 text-[14px]">{{ mn }}</div>
          </div>
        </picture>
      </div>

      <!-- 视频 -->
      <div
        v-show="show"
        v-element-hover="onHover"
        class="relative z-[1] rounded-md h-40 overflow-hidden"
      >
        <player :v="v" :cover="cover" h="160px" w="310px" />
      </div>

      <!-- 信息 -->
      <div class="flex flex-col h-20 space-y-2">
        <!-- 标题 -->
        <div class="basis-2/3 mt-2 font-semibold overflow-hidden tracking-wide">
          {{ title }}
        </div>
        <!-- 作者 -->
        <div class="flex basis-1/3 space-x-2 overflow-hidden cursor-pointer text-gray-300 text-sm">
          <sapn>{{ up }}</sapn>
          <span>{{ date }}</span>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped></style>
