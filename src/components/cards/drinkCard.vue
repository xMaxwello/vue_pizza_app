<script setup lang="ts">
import type { MenuItem } from '../../objects/foodItem';
import {defineProps, ref, watch} from "vue";

const props = defineProps<{
  item: MenuItem;
}>();

const isClicked = ref(false);
const emit = defineEmits(['updateDrinkPrice', 'drinkDetails']);

const toggleIcon = () => {
  isClicked.value = !isClicked.value;
  if (props.item.price) {
    const priceValue = parseFloat(props.item.price.replace(',', '.'));
    emit('updateDrinkPrice', { price: priceValue, add: isClicked.value });
  }
};

const emitDrinkDetails = () => {
  const item = props.item;
  if (item && item.price) {
    const price = parseFloat(item.price.replace(',', '.'));
    emit('drinkDetails', {
      id: item.id,
      name: item.name,
      price,
      quantity: 1,
      image: item.image
    });
  }
};

watch(isClicked, emitDrinkDetails);
</script>

<template>
  <div class="w-[105px] h-40 outline-none border-2 border-transparent bg-card rounded-[10px] p-0.5 flex flex-col justify-center items-center">
    <img class="h-[50px]" :src="`/${props.item.image}`" alt="drink"/>
    <span class="mt-2 text-mainColor text-xs font-normal text-center leading-[18px]">{{ props.item.name }}</span>
    <strong class="text-price text-center leading-6">{{ props.item.price }}€</strong>
    <button @click="toggleIcon" class="w-[30px] h-[30px] mt-2 flex justify-center items-center outline-none border-2 border-gray-400 rounded-[20px]">
      <svg v-if="isClicked" class="opacity-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7L19.5899 5.59L8.99991 16.17Z" fill="#001427"/>
      </svg>
      <svg v-else class="opacity-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99799H13V10.998H19V12.998Z" fill="#001427"/>
      </svg>
    </button>
  </div>
</template>
