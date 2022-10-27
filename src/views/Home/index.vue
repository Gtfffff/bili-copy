<script setup lang="ts">
import FeedCardI from './components/feed-card-I.vue'
import FeedCardII from './components/feed-card-II.vue'
import Carousel from './components/carousel.vue'
import { useStore } from '/@/store'
import { storeToRefs } from 'pinia'

const { home } = useStore()
const { video, index } = storeToRefs(home)

console.log('1111' + index.value)
</script>

<template>
  <div class="w-full wrap">
    <div class="w-full h-full">
      <div class="grid grid-cols-5 gap-5 grid-flow-row-dense relative">
        <!-- 轮播图 -->
        <div class="row-span-2 col-span-2">
          <Carousel />
        </div>
        <!-- 视频 -->
        <div v-for="item in video.slice(0, 6)" :key="item.id" class="h-60 bg-white">
          <FeedCardI
            :title="item.title"
            :mn="item.mn"
            :w="item.w"
            :up="item.up"
            :barrage="item.barrage"
            :cover="item.cover"
            :url="item.url"
            :date="item.date"
          />
        </div>
        <!-- 下拉视频 -->
        <template v-for="item in index + 1" :key="item">
          <!-- 视频 -->
          <div v-for="i in home.nextVideo(item - 1)" :key="i.id" class="h-60 bg-white mt-10">
            <FeedCardI
              :title="i.title"
              :mn="i.mn"
              :w="i.w"
              :up="i.up"
              :barrage="i.barrage"
              :cover="i.cover"
              :url="i.url"
              :date="i.date"
            />
          </div>
          <!-- 榜单 -->
          <div class="h-60 bg-white p-3 col-start-5 mt-10 rounded-md border-gray-100 border-[1px]">
            <FeedCardII :index="item - 1" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
