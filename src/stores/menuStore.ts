import { defineStore } from 'pinia';
import { menuItems } from '../data/menuItems';
import type {MenuItem} from '../objects/foodItem';

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menuItems: menuItems,
        currentItem: null as MenuItem | null
    }),
    actions: {
        setCurrentItem(item: MenuItem) {
            this.currentItem = item;
        }
    }
});
