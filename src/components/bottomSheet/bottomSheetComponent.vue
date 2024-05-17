<script setup lang="ts">
import {useBottomSheetStore} from "../../stores/bottomSheetStore.ts";

const store = useBottomSheetStore();
</script>

<template>
  <div v-if="store.isVisible" class="fixed inset-0 z-50 flex items-end justify-center backdrop-blur-sm">

    <div class="w-full max-w-md h-[652px] bg-white rounded-t-[10px] border-mainColor border-b-0 border-2 transition-transform duration-300 ease-in-out"
         :class="{'translate-y-0': store.isVisible, 'translate-y-full': !store.isVisible}">
      <div class="p-5">
        <component :is="store.contentComponent" @close="store.close"/>
      </div>
    </div>
  </div>
</template>

