import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import BasketPage from './pages/BasketPage.vue';
import ProductPage from './pages/ProductPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/basket', component: BasketPage },
  { path: '/favorites', component: FavoritesPage },
  { path: '/:id', component: ProductPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
