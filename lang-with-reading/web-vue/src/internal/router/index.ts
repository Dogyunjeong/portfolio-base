import {RouteConfig} from 'vue-router/types/router'
const routes: RouteConfig[] = [
  {
    path: "dialogue/create",
    name: "create dialogue",
    component: () => import("../containers/Dialogue/Create.vue")
  }
]


export default routes
