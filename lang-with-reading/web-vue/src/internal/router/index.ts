import { RouteConfig } from 'vue-router/types/router'
const routes: RouteConfig[] = [
  {
    path: '',
    name: 'create dialogue',
    component: () => import('../containers/AdminHome/AdminHome.vue'),
  },
  {
    path: 'authentication',
    name: 'create dialogue',
    component: () => import('../containers/Authentication/Authentication.vue'),
  },
  {
    path: 'dialogue/create',
    name: 'create dialogue',
    component: () => import('../containers/Dialogue/Create.vue'),
  },
]

export default routes
