<script setup lang="ts">
import { ref, onMounted } from 'vue';
import cartBottomSheet from "./bottomSheetItems/cartBottomSheet.vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 10);
});

const closeBottomSheet = () => {
  isVisible.value = false;
};
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-end justify-center">
    <div class="w-full max-w-md h-[652px] bg-white rounded-t-[10px] border-mainColor border-b-0 border-2 transition-transform duration-300" :class="{'translate-y-0': isVisible, 'translate-y-full': !isVisible}">
      <div class="p-5">
        <cartBottomSheet @close="closeBottomSheet"/>
      </div>
    </div>
  </div>
</template>