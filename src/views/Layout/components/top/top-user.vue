<script setup lang="ts">
import { useStore } from '/@/store'

const { home } = useStore()
</script>

<template>
  <div class="relative box-content pr-[10px] w-[50px] h-[50px] cursor-pointer group">
    <!-- 主体 -->
    <div
      class="relative z-[2] transition ease-in-out group-hover:-translate-y-1 group-hover:-translate-x-5 group-hover:scale-[2.2]"
    >
      <a href="#" class="absolute top-[5px] left-[10px] z-[2] block w-[38px] h-[38px] rounded-full">
        <picture class="rounded-full bg-transparent">
          <img
            :src="home.user.avatar"
            class="border-2 border-solid border-white rounded-[50%] block w-full h-full object-cover overflow-hidden"
          />
        </picture>
      </a>
    </div>
    <!-- 隐藏部分 -->
    <div
      class="transition duration-300 delay-[3000ms] hidden top-full left-1/2 -translate-x-[170px] absolute z-[1] group-hover:block"
    >
      <div
        class="relative bg-slate-100 shadow-search rounded-lg border-solid border-gray-400 text-black"
      >
        <div class="px-6 pb-[18px] w-[300px] rounded-lg bg-slate-100">
          <!-- 头像占位 -->
          <div class="block mb-1 w-20 h-20 opacity-0"></div>
          <!-- 名字 -->
          <div class="flex justify-center -mt-10 mb-[2px] text-[20px]">
            {{ home.user.name }}
          </div>
          <!-- 等级 -->
          <div class="flex items-center justify-center my-1">
            <em class="not-italic text-pink-600 text-center text-[8px] font-bold">
              {{ 'LV' + home.user.level }}
            </em>
          </div>
          <!-- 硬币 -->
          <div class="relative flex items-center justify-center mb-[6px] space-x-2">
            <div class="text-gray-400 text-[6px]">
              <span class="text-[4px]">硬币:</span>
              <em class="not-italic font-bold text-gray-900">
                {{ home.user.coin }}
              </em>
            </div>
            <div class="text-gray-400 text-[6px]">
              B币:
              <em class="not-italic font-bold text-gray-900">
                {{ home.user.coin }}
              </em>
            </div>
          </div>
          <!-- 其他 -->
          <div class="flex justify-between mb-3 px-5">
            <!-- 关注 -->
            <div class="flex flex-col items-center justify-between">
              <div class="font-medium">{{ home.user.fork }}</div>
              <div class="text-gray-500 font-normal text-[12px]">关注</div>
            </div>
            <!-- 粉丝 -->
            <div class="flex flex-col items-center justify-between">
              <div class="font-medium">{{ home.user.fork }}</div>
              <div class="text-gray-500 font-normal text-[12px]">粉丝</div>
            </div>
            <!-- 动态 -->
            <div class="flex flex-col items-center justify-between">
              <div class="font-medium">{{ home.user.fork }}</div>
              <div class="text-gray-500 font-normal text-[12px]">动态</div>
            </div>
          </div>
          <!-- 链接选项 -->
          <div class="">
            <!-- 个人中心 -->
            <div
              class="flex items-center justify-between mb-[2px] px-[14px] leading-[38px] rounded-lg text-gray-600 font-bold text-[14px] cursor-pointer whitespace-nowrap hover:bg-slate-200"
            >
              <div class="flex items-center space-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <rect opacity="0.01" width="18" height="18" fill="white"></rect>
                  <path
                    d="M12.1146 9.48983C13.2763 8.63331 14.0299 7.2548 14.0299 5.7035C14.0299 3.11005 11.9198 1 9.32636 1C6.73291 1 4.62286 3.11005 4.62286 5.7035C4.62286 7.2548 5.37829 8.63331 6.53808 9.48983C3.87662 10.589 2 13.2118 2 16.2648C2 16.671 2.32901 17 2.73521 17C3.14141 17 3.47042 16.671 3.47042 16.2648C3.47042 13.0335 6.09879 10.407 9.3282 10.407C12.5576 10.407 15.186 13.0354 15.186 16.2648C15.186 16.671 15.515 17 15.9212 17C16.3274 17 16.6564 16.671 16.6564 16.2648C16.6546 13.2118 14.7761 10.589 12.1146 9.48983ZM6.09144 5.7035C6.09144 3.91878 7.54348 2.46858 9.32636 2.46858C11.1092 2.46858 12.5613 3.92062 12.5613 5.7035C12.5613 7.48639 11.1092 8.93843 9.32636 8.93843C7.54348 8.93843 6.09144 7.48639 6.09144 5.7035Z"
                    class="fill-current"
                  ></path>
                </svg>
                <span>个人中心</span>
              </div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="-rotate-90"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <!-- 投稿推荐 -->
            <div
              class="flex items-center justify-between mb-[2px] px-[14px] leading-[38px] rounded-lg text-gray-600 font-bold text-[14px] cursor-pointer whitespace-nowrap hover:bg-slate-200"
            >
              <div class="flex items-center space-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <rect opacity="0.01" width="18" height="18" fill="#C4C4C4"></rect>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.375 1.875H10.875C12.739 1.875 14.25 3.38604 14.25 5.25V7.875V8.625C14.25 9.03921 14.5858 9.375 15 9.375C15.4142 9.375 15.75 9.03921 15.75 8.625V7.875V5.25C15.75 2.55761 13.5674 0.375 10.875 0.375H3.375C2.33947 0.375 1.5 1.21447 1.5 2.25V15C1.5 16.0355 2.33947 16.875 3.375 16.875H6.75H7.5C7.91421 16.875 8.25 16.5392 8.25 16.125C8.25 15.7108 7.91421 15.375 7.5 15.375H6.75H3.375C3.16789 15.375 3 15.2071 3 15V2.25C3 2.04289 3.16789 1.875 3.375 1.875ZM10.4 8.51962C10.8 8.28868 10.8 7.71132 10.4 7.48038L7.7 5.92154C7.3 5.6906 6.8 5.97927 6.8 6.44115V9.55885C6.8 10.0207 7.3 10.3094 7.7 10.0785L10.4 8.51962ZM15.518 14.2511L14.3215 16.3234H11.9285L10.7321 14.2511L11.9285 12.1787H14.3215L15.518 14.2511ZM16.817 13.5011C17.0849 13.9652 17.0849 14.537 16.817 15.0011L15.6205 17.0734C15.3526 17.5375 14.8574 17.8234 14.3215 17.8234H11.9285C11.3926 17.8234 10.8974 17.5375 10.6295 17.0734L9.43302 15.0011C9.16507 14.537 9.16507 13.9652 9.43302 13.5011L10.6295 11.4287C10.8974 10.9646 11.3926 10.6787 11.9285 10.6787H14.3215C14.8574 10.6787 15.3526 10.9646 15.6205 11.4287L16.817 13.5011ZM13.125 13.3125C12.6072 13.3125 12.1875 13.7322 12.1875 14.25C12.1875 14.7678 12.6072 15.1875 13.125 15.1875C13.6428 15.1875 14.0625 14.7678 14.0625 14.25C14.0625 13.7322 13.6428 13.3125 13.125 13.3125Z"
                    class="fill-current"
                  ></path>
                </svg>
                <span>投稿推荐</span>
              </div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="-rotate-90"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <!-- 推荐服务 -->
            <div
              class="flex items-center justify-between mb-[2px] px-[14px] leading-[38px] rounded-lg text-gray-600 font-bold text-[14px] cursor-pointer whitespace-nowrap hover:bg-slate-200"
            >
              <div class="flex items-center space-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.76269 1.80538C8.3585 0.936022 9.6415 0.936021 10.2373 1.80538L11.8725 4.19132C12.0675 4.47592 12.3547 4.68457 12.6857 4.78213L15.4601 5.59999C16.4711 5.89799 16.8675 7.11819 16.2248 7.95349L14.461 10.2459C14.2506 10.5194 14.1409 10.857 14.1504 11.2019L14.2299 14.0933C14.2589 15.1468 13.2209 15.901 12.2279 15.5478L9.50257 14.5787C9.1775 14.4631 8.82251 14.4631 8.49743 14.5787L5.77211 15.5478C4.7791 15.901 3.74113 15.1468 3.77011 14.0933L3.84963 11.2019C3.85912 10.857 3.74942 10.5194 3.53902 10.2459L1.77516 7.95349C1.13247 7.11819 1.52893 5.89799 2.53986 5.59999L5.31432 4.78213C5.64526 4.68457 5.93246 4.47592 6.1275 4.19132L7.76269 1.80538Z"
                    stroke="currentColor"
                    stroke-width="1.6"
                  ></path>
                  <path
                    d="M8.64131 6.72679C8.78803 6.4295 9.21197 6.4295 9.35869 6.72679L9.78861 7.5979C9.84687 7.71595 9.9595 7.79778 10.0898 7.81671L11.0511 7.9564C11.3792 8.00408 11.5102 8.40726 11.2728 8.63868L10.5772 9.31674C10.4829 9.40863 10.4399 9.54103 10.4621 9.67079L10.6263 10.6282C10.6824 10.955 10.3394 11.2042 10.046 11.0499L9.18614 10.5979C9.06961 10.5366 8.93039 10.5366 8.81386 10.5979L7.95403 11.0499C7.66058 11.2042 7.31761 10.955 7.37365 10.6282L7.53787 9.67079C7.56012 9.54103 7.5171 9.40863 7.42283 9.31674L6.72721 8.63868C6.4898 8.40727 6.62081 8.00408 6.9489 7.9564L7.91022 7.81671C8.0405 7.79778 8.15313 7.71596 8.21139 7.5979L8.64131 6.72679Z"
                    class="fill-current"
                  ></path>
                </svg>
                <span>个人中心</span>
              </div>
              <svg
                width="10"
                height="10"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="-rotate-90"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <!-- 分割线 -->
          <div class="my-[10px] w-full h-[1px] bg-slate-300"></div>
          <!-- 退出登录 -->
          <div
            class="flex items-center py-[10px] px-[14px] rounded-lg text-gray-700 text-[14px] cursor-pointer hover:bg-slate-200"
          >
            <div class="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="link-icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6137 9.30115C17.6932 9.10837 17.6932 8.89282 17.6137 8.70004C17.5743 8.60393 17.5165 8.51726 17.4443 8.44504L15.2221 6.22282C14.9148 5.9156 14.4176 5.91615 14.111 6.22282C13.8043 6.52948 13.8037 7.02671 14.111 7.33393L14.9921 8.21504L7.99985 8.21504C7.56596 8.21448 7.21429 8.56615 7.21429 9.00059C7.21429 9.21726 7.30207 9.41393 7.44429 9.55615C7.58651 9.69837 7.78318 9.78615 7.99985 9.78615L14.9921 9.78615L14.111 10.6673C13.8043 10.9739 13.8037 11.4712 14.111 11.7784C14.4182 12.0856 14.9154 12.085 15.2221 11.7784L17.4443 9.55615C17.5165 9.48393 17.5743 9.39726 17.6137 9.30115"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.8889 5.11111C9.74127 2.96349 6.25873 2.96349 4.11111 5.11111C1.96349 7.25873 1.96349 10.7413 4.11111 12.8889C6.25873 15.0365 9.74127 15.0365 11.8889 12.8889C12.1957 12.5821 12.6932 12.5821 13 12.8889C13.3068 13.1957 13.3068 13.6932 13 14C10.2387 16.7613 5.76127 16.7613 3 14C0.238731 11.2387 0.23873 6.76127 3 4C5.76127 1.23873 10.2387 1.23873 13 4C13.3068 4.30683 13.3068 4.80429 13 5.11111C12.6932 5.41794 12.1957 5.41794 11.8889 5.11111Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>退出登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
