import { createRouter, createWebHistory } from 'vue-router'
import HomeShop from '../views/HomeShop.vue'
import ProductList from '../views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeShop,
    },
    {
      path: '/product',
      name: 'product',
      component: ProductList,
    }
  ],
})

export default router
