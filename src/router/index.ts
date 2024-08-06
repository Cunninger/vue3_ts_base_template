import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import DefaultPage from '@/views/DefaultPage.vue'
import LoginIndex from '@/views/login/index.vue'
import RegisterIndex from '@/views/register/index.vue'
import UserManageIndex from '@/views/nav/UserManage.vue'
import Products from '@/views/nav/Products.vue'
import PurchaseOrders from '@/views/nav/PurchaseOrders.vue'
import Inventory from '@/views/nav/Inventory.vue'
import SalesOrders from '@/views/nav/SalesOrders.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: AppLayout,
      children: [
        {
          path: '/layout',
          component: DefaultPage
        },
        {
          path: '/usermanage',
          component: UserManageIndex
        },
        {
          path: '/products',
          component: Products
        },
        {
          path: '/purchaseorders',
          component: PurchaseOrders
        },
        {
          path: '/inventory',
          component: Inventory
        },
        {
          path: '/salesorders',
          component: SalesOrders
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: LoginIndex
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterIndex
    },

  ]
})

export default router
