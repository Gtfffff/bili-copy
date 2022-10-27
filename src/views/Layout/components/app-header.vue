<script setup lang="ts">
import AppHeaderNav from './top/top-index.vue'
import AppHeaderNavSticky from './top/top-index-sticky.vue'
import AppChannel from './channel/channel-index.vue'
import AppChannelSticky from './channel/channel-index-sticky.vue'
import AppBanner from './banner/banner-index.vue'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
</script>

<template>
  <div class="bg-slate-100 min-h-[64px] relative m-auto max-w-[2560px] w-full">
    <AppHeaderNav />
    <AppHeaderNavSticky v-show="y >= 78" />
    <AppBanner />
    <AppChannel />
    <AppChannelSticky v-show="y >= 200" />
  </div>
</template>
<style scoped></style>
