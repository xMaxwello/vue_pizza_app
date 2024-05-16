<script setup lang="ts">
import { computed } from 'vue';
import { useBottomSheetStore } from "../../stores/bottomSheetStore.ts";

const bottomSheetStore = useBottomSheetStore();

const isVisible = computed(() => bottomSheetStore.isVisible);
const ContentComponent = computed(() => bottomSheetStore.contentComponent);

const closeBottomSheet = () => {
  bottomSheetStore.hide();
};
</script>

<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-end justify-center">
    <div class="w-full max-w-md h-[652px] bg-white rounded-t-[10px] border-mainColor border-b-0 border-2 transition-transform duration-300">
      <div class="p-5">
        <component :is="ContentComponent" @close="closeBottomSheet"/>
      </div>
    </div>
  </div>
</template>
