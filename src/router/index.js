import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/index',
    children: [
      {
        path: 'index',
        component: () => import('../views/Home/Index.vue')
      },
      {
        path: 'placeend',
        component: () => import('../views/Home/PlaceEnd.vue')
      }
      ,
      {
        path: 'customized',
        component: () => import('../views/Home/Customized.vue')
      }
      , {
        path: 'search',
        component: () => import('../views/Home/Search.vue')
      }
      , {
        path: 'my',
        component: () => import('../views/Home/My.vue')
      }
    ],
  },
  {
    path:'/twodetail/:id',
    component:()=>import('../views/TwoDetail.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue'),
  },
   {
    path: '/search/index',
    component: () => import('../views/Search/Index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
