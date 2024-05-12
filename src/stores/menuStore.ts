import { defineStore } from 'pinia';
import { menuItems } from '../data/menuItems';
import type { MenuCategory } from '../objects/foodItem';

export const useMenuStore = defineStore('menu', {
    state: (): { menuItems: MenuCategory[] } => ({
        menuItems: menuItems
    }),
    actions: {
        refreshMenuItems() {
            this.menuItems = [...menuItems];
        }
    }
});
