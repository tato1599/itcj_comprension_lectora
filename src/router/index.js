// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/TestRead.vue'),
      },
      {
        path: '/testQuestion',
        name: 'TestQuestion',
        component: () => import('@/views/TestQuestion.vue'),

      },
      {
        path: '/testResults',
        name: 'TestResult',
        component: () => import('@/views/TestResult.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
