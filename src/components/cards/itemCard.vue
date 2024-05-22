<script setup lang="ts">
import {computed, defineProps, ref, watch} from 'vue';
import {MenuItem, Size} from "../../objects/foodItem.ts";
import router from "../../router";

const props = defineProps<{
  items: MenuItem[];
  initialIndex: number;
}>();

const currentIndex = ref(props.initialIndex);
const currentItem = computed(() => props.items[currentIndex.value]);
const emit = defineEmits(['updateItemPrice', 'selectItem']);


const isAtStart = computed(() => currentIndex.value === 0);
const isAtEnd = computed(() => currentIndex.value === props.items.length - 1);

const navigateItem = (step: number) => {
  const newIndex = currentIndex.value + step;
  if (newIndex >= 0 && newIndex < props.items.length) {
    currentIndex.value = newIndex;
  }
};

watch(currentItem, (newItem) => {
  if (newItem) {
    router.push({ name: 'item', params: { slug: newItem.url } });
  }
});

const counter = ref(1);

const increment = () => {
  if (counter.value < 10) counter.value++;
};

const decrement = () => {
  if (counter.value > 1) counter.value--;
};

const selectedSize = ref<Size>('medium');
const sizes: Size[] = ['small', 'medium', 'large'];

const displayPrice = computed(() => {
  const price = currentItem.value && currentItem.value.prices ? currentItem.value.prices[selectedSize.value] : currentItem.value?.price;
  return price ? price.replace('.', ',') : 'N/A';
});

watch([currentItem, selectedSize, counter], () => {
  const item = currentItem.value;
  if (item) {
    const basePrice = item.prices ? item.prices[selectedSize.value] : item.price;
    if (basePrice) {
      const numericPrice = parseFloat(basePrice.replace(',', '.'));
      emit('updateItemPrice', { price: numericPrice, count: counter.value });
      console.log('Emitting price:', numericPrice, 'Count:', counter.value);
    }
  }
}, { immediate: true });

const emitItemDetails = () => {
  const item = currentItem.value;
  if (item) {
    const price = item.prices ? parseFloat(item.prices[selectedSize.value].replace(',', '.')) : parseFloat(item.price.replace(',', '.'));
    console.log('Emitting item details for:', item.name);
    emit('selectItem', {
      id: item.id,
      name: item.name,
      price,
      quantity: counter.value,
      size: selectedSize.value,
      image: item.image
    });
  }
};

watch([currentItem, selectedSize, counter], emitItemDetails, { immediate: true });
</script>

<template>
  <div class=" w-full h-[327px] outline-none border-2 border-transparent bg-card rounded-[10px] pt-5 px-4 pb-4 flex flex-col justify-center items-center">
    <img class="mb-5 w-[100px] h-[100px]" :src="`/${currentItem.image}`" alt="item"/>
    <div class="flex justify-between w-full items-center">
      <button :class="{ 'opacity-0': isAtStart }" @click="() => navigateItem(-1)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M11.67 3.86998L9.9 2.09998L0 12L9.9 21.9L11.67 20.13L3.54 12L11.67 3.86998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    <strong class="text-mainColor text-base font-semibold text-center leading-[18px]">{{ currentItem.name }}</strong>
      <button :class="{ 'opacity-0': isAtEnd }" @click="() => navigateItem(1)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M12.33 20.13L14.1 21.9L24 12L14.1 2.10002L12.33 3.87002L20.46 12L12.33 20.13Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    </div>
    <strong class="mt-3 text-price text-center leading-6">{{ displayPrice }}€</strong>
    <div class="mt-3 flex space-x-4 justify-center items-center">
      <button @click="decrement">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M19 12.998H5V10.998H19V12.998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
      <div class="w-[30px] h-[30px] flex justify-center items-center outline-none border-2 border-gray-400 rounded-[20px]">
        <strong class="text-mainColor text-sm font-semibold text-center leading-[21px]">{{ counter }}</strong>
      </div>
      <button @click="increment">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99799H13V10.998H19V12.998Z" fill="#001427"/>
          </g>
        </svg>
      </button>
    </div>
    <div class="flex justify-center items-center mt-10 font-semibold text-xs leading-[18px] space-x-10">
      <button v-for="size in sizes" :key="size" :class="`transition-opacity duration-300 ${selectedSize === size ? 'opacity-100' : 'opacity-50'}`"
          @click="selectedSize = size" class="text-mainColor">
        {{ size.charAt(0).toUpperCase() + size.slice(1) }}
      </button>
    </div>
  </div>
</template>
