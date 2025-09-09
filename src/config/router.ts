import { createRouter, createWebHistory} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes = [
  { path:'/', component: HomeView},
  { path:'/projects', component: ProjectsView},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if(to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0}
  }
})

export default router;
