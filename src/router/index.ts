import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import DefaultPage from '@/views/DefaultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children: [
       {
        path: '/',
        name: 'home',
        component: DefaultPage
      },
      ]
    },   
   
 
  ]
})

export default router
