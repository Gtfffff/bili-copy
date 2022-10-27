<script setup lang="ts">
import { useStore } from '/@/store'
import { ref, watch } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const { home } = useStore()

// 搜索框点击事件
let minor = ref(' hidden')
let main = ref(' rounded-lg opacity-90')
let input = ref('')
function show() {
  minor.value = ''
  main.value = ' rounded-t-lg border-b-0'
  input.value = ' bg-slate-300'
}
function hidden() {
  minor.value = ' hidden'
  main.value = ' rounded-lg opacity-90'
  input.value = ''
}

// 输入框事件
let inputValue = ref('')
let p1 = ref(' hidden')
let p2 = ref('')
const defaultPh = '默认'

watch(inputValue, (newValue, oldValue) => {
  if (inputValue.value) {
    p1.value = ''
    p2.value = ' hidden'
  } else {
    p1.value = ' hidden'
    p2.value = ''
  }
})
function clearInput() {
  inputValue.value = ''
}

// 历史事件
function clearHistory(num?: number) {
  home.deleteHistory(num)
}

//辅助搜索
let arr = ['111', '222', '333', '444']
</script>

<template>
  <div
    v-on-click-outside="hidden"
    class="rounded-lg shadow-search relative m-auto min-w-[181px] max-w-[500px]"
  >
    <!-- 本体 -->
    <div
      :class="
        'flex items-center pl-1 pr-12 relative z-[1] overflow-hidden leading-[38px] border-[1px] border-solid border-slate-200 h-10 bg-slate-100 transition-colors hover:opacity-100' +
        main
      "
    >
      <!-- 输入框 -->
      <div
        :class="
          'flex items-center justify-between relative w-full h-8 rounded-md border-2 border-solid border-transparent' +
          input
        "
        @click="show()"
      >
        <!-- 输入 -->
        <input
          v-model="inputValue"
          type="text"
          autocomplete="off"
          accesskey="s"
          maxlength="100"
          :placeholder="defaultPh"
          class="flex-1 overflow-hidden h-8 px-2 none-border bg-transparent shadow-none text-gray-700 text-[14px] leading-5"
        />
        <!-- 清除按钮 -->
        <div
          :class="'absolute w-4 h-4 right-[10px] cursor-pointer group' + p1"
          @click="clearInput()"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75ZM9.64999 5.64303C9.84525 5.44777 10.1618 5.44777 10.3571 5.64303C10.5524 5.83829 10.5524 6.15487 10.3571 6.35014L8.70718 8.00005L10.3571 9.64997C10.5524 9.84523 10.5524 10.1618 10.3571 10.3571C10.1618 10.5523 9.84525 10.5523 9.64999 10.3571L8.00007 8.70716L6.35016 10.3571C6.15489 10.5523 5.83831 10.5523 5.64305 10.3571C5.44779 10.1618 5.44779 9.84523 5.64305 9.64997L7.29296 8.00005L5.64305 6.35014C5.44779 6.15487 5.44779 5.83829 5.64305 5.64303C5.83831 5.44777 6.15489 5.44777 6.35016 5.64303L8.00007 7.29294L9.64999 5.64303Z"
              class="fill-gray-400 group-hover:fill-gray-600"
            ></path>
          </svg>
        </div>
      </div>
      <!-- 搜索按钮 -->
      <div
        class="absolute top-[3px] right-[7px] flex items-center justify-center m-0 p-0 w-8 h-8 border-none rounded-md text-black leading-8 cursor-pointer"
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- 隐藏部分 -->
    <div
      :class="
        'w-full max-h-[612px] overflow-y-auto bg-slate-100 border-solid border-gray-400 border-t-0 rounded-b-lg pt-[13px] pb-4' +
        minor
      "
    >
      <!-- 历史 -->
      <div :class="'max-w-[498px]' + p2">
        <!-- 头 -->
        <div class="flex items-center justify-between px-4">
          <div class="h-6 text-[16px] leading-6 font-bold">搜索历史</div>

          <div class="h-[15px] text-xs text-gray-600 cursor-pointer" @click="clearHistory()">
            清空
          </div>
        </div>
        <!-- 内容 -->
        <div class="max-h-[172px] px-4 overflow-hidden">
          <div class="flex flex-wrap mt-3 -mr-[10px] mb-1">
            <div
              v-for="(item, i) in home.history"
              :key="i"
              class="relative box-border h-[30px] py-[7px] pl-[10px] pr-2 text-xs bg-gray-200 rounded mr-[10px] mb-[10px] cursor-pointer group"
            >
              <div class="overflow-hidden whitespace-nowrap text-ellipsis max-w-[96px]">
                {{ item }}
              </div>
              <!-- 删除标签 -->
              <div
                class="absolute box-border w-4 h-4 -top-3 -right-[1px] p-2"
                @click="clearHistory(i)"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  width="14"
                  height="14"
                  fill="#ccc"
                  class="hidden hover:fill-slate-600 group-hover:block"
                >
                  <path
                    d="M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462
                  0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102
                  447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499
                  12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997
                  9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727
                  c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415
                  c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221
                  c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093
                  l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924
                  0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 热搜 -->
      <div :class="'max-w-[498px]' + p2">
        <!-- 头 -->
        <div>
          <div class="flex items-center justify-between px-4">
            <div class="h-6 text-[16px] leading-6 font-bold">热搜</div>
          </div>
        </div>
        <!-- 内容 -->
        <div
          class="grid grid-rows-5 grid-cols-2 items-center justify-between grid-flow-dense gap-x-[10px]"
        >
          <div v-for="(item, i) in home.hot" :key="i" class="hover:bg-slate-300">
            <div class="flex px-4 box-border h-[38px] items-center cursor-pointer pl-4">
              <div class="w-[15px] min-w-[15px] h-[17px] text-search text-cente mr-[7px]">
                {{ i + 1 }}
              </div>
              <div
                class="text-search h-[17px] mr-[6px] whitespace-nowrap overflow-hidden text-ellipsis tracking-normal"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索选项 -->
      <div
        :class="
          'w-full max-h-[612px] overflow-y-auto border-solid bg-slate-100 border-gray-400 border-t-0 rounded-b-lg' +
          p1
        "
      >
        <div class="max-w-[498px]">
          <div
            v-for="(item, i) in arr"
            :key="i"
            class="h-8 flex items-center leading-8 text-[14px] text-left whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer py-4 mb-1 hover:bg-slate-300"
          >
            <em class="not-italic text-pink-600 text-center pl-4">
              {{ inputValue }}
            </em>
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
