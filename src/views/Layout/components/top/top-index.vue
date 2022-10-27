<script setup lang="ts">
import { useStore } from '/@/store/index'
import NavPanelR from './top-navR-panel.vue'
import NavPanelL from './top-navL-panel.vue'
import Search from './top-search.vue'
import User from './top-user.vue'

const { home } = useStore()
home.getAllCategory()

const props = withDefaults(
  defineProps<{
    position: string
    textCorler: string
  }>(),
  {
    position: ' absolute',
    textCorler: ' text-white'
  }
)
</script>

<template>
  <div
    :class="
      'flex top-0 z-[1002] items-center justify-between px-6 max-w-[2560px] w-full h-16' +
      props.position
    "
  >
    <!-- 左导航 -->
    <ul class="left flex items-center shrink-0 mr-[30px] space-x-5">
      <li v-for="item in home.left" :key="item.id">
        <RouterLink
          :to="`/category/${item.id}`"
          :class="'flex items-center h-16 cursor-pointer space-x-2' + props.textCorler"
        >
          <NavPanelL :text="item.name" :svg="item.svg"><slot></slot></NavPanelL>
        </RouterLink>
      </li>
    </ul>

    <!-- 搜索 -->
    <div class="search flex-auto h-[38px]">
      <Search />
    </div>

    <!-- 右导航 -->
    <ul class="right flex items-center ml-[50px]">
      <!-- 用户信息 -->
      <RouterLink to="/">
        <User />
      </RouterLink>

      <!-- 其他 -->
      <RouterLink
        v-for="item in home.right"
        :key="item.id"
        to="/"
        :class="
          'group flex flex-col items-center shrink-0 mr-0 min-w-[50px] text-center text-[13px] last:navLast last:text-white' +
          textCorler
        "
      >
        <NavPanelR :text="item.name" :svg="item.svg" />
      </RouterLink>
    </ul>
  </div>
</template>

<style scoped></style>
