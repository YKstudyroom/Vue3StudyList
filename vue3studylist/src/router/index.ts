import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/List3-2',
      name: 'List3-2',
      component: () => import('../views/List3-2.vue'),
    },
    {
      path: '/List3-3',
      name: 'List3-3',
      component: () => import('../views/List3-3.vue'),
    },
  ],
})

export default router
