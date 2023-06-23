// Composables
import { createRouter, createWebHistory } from 'vue-router'
import * as nav  from '@/configs'
import {render} from "vue";
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Index.vue'),
    children: [
      ...nav.routes,
      ...[
        {
          path:'profile',
          component: () => import('@/views/profile', {a:4}),
          props:{a:87}
        }
      ]
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
