import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [] as Order[],
        lastId: 0,
    }),
    getters: {
        sortedOrders: (state) => {
            return [...state.orders].sort((a, b) => b.id - a.id);
        }
    },
    actions: {
        addOrder(items: OrderItem[], total: number) {
            const newOrder: Order = {
                id: ++this.lastId,
                items,
                total,
                timestamp: new Date()
            };
            this.orders.push(newOrder);
            this.orders.sort((a, b) => b.id - a.id);
        },
    }
});
