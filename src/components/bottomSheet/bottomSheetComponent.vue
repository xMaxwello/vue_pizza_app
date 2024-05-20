<script setup lang="ts">
import {useBottomSheetStore} from "../../stores/bottomSheetStore.ts";

const bottomSheet = useBottomSheetStore();
</script>

<template>
  <div v-if="bottomSheet.isVisible" class="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-md bg-mainColor bg-opacity-30">

    <div class="w-full max-w-md h-[652px] bg-white rounded-t-[10px] transition-transform duration-300 ease-in-out"
         :class="{'translate-y-0': bottomSheet.isVisible, 'translate-y-full': !bottomSheet.isVisible}">
      <div class="p-5">
        <component :is="bottomSheet.contentComponent" @close="bottomSheet.close"/>
      </div>
    </div>
  </div>
</template>

