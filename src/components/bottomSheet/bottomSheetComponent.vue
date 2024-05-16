<script setup lang="ts">
import {useBottomSheetStore} from "../../stores/bottomSheetStore.ts";

const store = useBottomSheetStore();
</script>

<template>
  <div v-if="store.isVisible" class="fixed inset-0 z-50 flex items-end justify-center">
    <div class="w-full max-w-md h-[652px] bg-white rounded-t-[10px] border-mainColor border-b-0 border-2">
      <div class="p-5">
        <component :is="store.contentComponent" @close="store.close"/>
      </div>
    </div>
  </div>
</template>
