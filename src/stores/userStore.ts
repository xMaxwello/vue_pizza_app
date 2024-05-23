import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            name: '',
            email: '',
            address: '',
            postcode: '',
            password: '',
        },
    }),
});
