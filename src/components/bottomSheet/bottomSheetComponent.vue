<script setup lang="ts">
import cartBottomSheet from "./bottomSheetItems/cartBottomSheet.vue";
import orderBottomSheet from "./bottomSheetItems/orderBottomSheet.vue";

</script>

<template>
  <div class="h-[652px]">
    <div class="flex flex-col px-5 h-full">
      <div class="flex flex-col justify-between h-full px-5 bg-white border-mainColor border-2 border-b-transparent rounded-t-[10px]">
<!--        <cartBottomSheet/>-->
        <orderBottomSheet/>
      </div>
    </div>
  </div>

</template>

