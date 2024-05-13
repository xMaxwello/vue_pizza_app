import {createRouter, createWebHistory} from 'vue-router';
import homePage from '../pages/homePage.vue';
import itemPage from '../pages/itemPage.vue';
import userPage from "../pages/userPage.vue";

const routes = [
    {
        'path': '/',
        'name': 'home',
        'component': homePage,
    },

    {
        'path': '/:category/:slug',
        'name': 'item',
        'component': itemPage,
        props: true,
    },

    {
        'path': '/account',
        'name': 'user',
        'component': userPage,
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router