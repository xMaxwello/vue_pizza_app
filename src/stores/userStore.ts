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
    actions: {
        updateUser(data: { name?: string; email?: string; address?: string; postcode?: string; password?: string }) {
            if (data.name !== undefined) this.user.name = data.name;
            if (data.email !== undefined) this.user.email = data.email;
            if (data.address !== undefined) this.user.address = data.address;
            if (data.postcode !== undefined) this.user.postcode = data.postcode;
            if (data.password !== undefined) this.user.password = data.password;
        }
    }
});
