import { defineStore } from 'pinia';
import type { CartItem } from '../objects/cartItem.ts';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
    }),
    actions: {
        addToCart(item: CartItem) {
            const existingItem = this.items.find(it => it.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.items.push({ ...item, quantity: 1 });
            }
        },
        removeFromCart(itemId: number) {
            this.items = this.items.filter(item => item.id !== itemId);
        },
    }
});
