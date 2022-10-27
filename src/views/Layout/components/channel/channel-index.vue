<script setup lang="ts">
import PanelRL from './channel-panelRL.vue'
import PanelL from './channel-panelL.vue'
import PanelRR from './channel-panelRR.vue'
</script>

<template>
  <div class="flex h-[120px] items-center bg-slate-50 relative w-full wrap">
    <!-- 左 -->
    <PanelL />

    <!-- 右 -->
    <div class="flex justify-between w-full">
      <PanelRL />
      <PanelRR />
    </div>
  </div>
</template>

<style scoped></style>
