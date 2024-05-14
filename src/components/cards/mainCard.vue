<script setup lang="ts">
import {useRouter } from "vue-router";
import type { MenuItem } from '../../objects/foodItem';
import {computed} from "vue";
const router = useRouter();

const props = defineProps<{
  item: MenuItem;
  category: string;
}>();

const navigateToItem = () => {
  router.push({ path: `/${props.category.toLowerCase()}/${props.item.url}` });
};

const displayPrice = computed(() => {
  return props.item.prices ? props.item.prices.medium : props.item.price;
});
</script>

<template>
  <button @click="navigateToItem" class="w-[150px] h-[180px] outline-none border-2 border-transparent bg-card rounded-[10px] pt-5 px-4 pb-4 flex flex-col justify-center items-center">
    <img :src="props.item.image" alt=""/>
    <span class="mt-3 text-mainColor text-xs font-normal text-center leading-[18px]">{{ props.item.name }}</span>
    <strong class="mt-auto text-price text-center leading-6">{{ displayPrice }}€</strong>
  </button>
</template>