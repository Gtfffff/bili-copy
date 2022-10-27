<script setup lang="ts">
import { vElementHover } from '@vueuse/components'
import { reactive, ref } from 'vue'

const play = ref<any>(null)
interface props {
  cover: any
  v: any
  w: string
  h: string
}
const prop = defineProps<props>()

const options = reactive({
  width: prop.w, //播放器高度
  height: prop.h, //播放器高度
  color: '#409eff', //主题色
  title: '', //视频名称
  src: prop.v, //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0, //默认音量大小
  control: false //是否显示控制
})
function onHover() {
  play.value.currentTime = 0
  play.value.play()
}
</script>

<template>
  <div>
    <vue3VideoPlay ref="play" v-element-hover="onHover" v-bind="options" :poster="prop.cover" />
  </div>
</template>

<style scoped></style>
