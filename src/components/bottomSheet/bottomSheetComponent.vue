<script setup lang="ts">
import {useBottomSheetStore} from "../../stores/bottomSheetStore.ts";

const bottomSheet = useBottomSheetStore();
</script>

<template>
  <transition
      enter-active-class="duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
    <div v-if="bottomSheet.isVisible" class="fixed inset-0 z-10 flex items-end justify-center backdrop-blur-md">
      <div class="absolute inset-0 bg-mainColor bg-opacity-30 transition-opacity duration-300"></div>
      <div v-show="bottomSheet.isVisible" class="w-full max-w-md h-[652px] z-20 bg-white rounded-t-[10px] overflow-hidden">
        <div class="p-5">
          <component :is="bottomSheet.contentComponent" @close="bottomSheet.close"/>
        </div>
      </div>
    </div>
  </transition>
</template>