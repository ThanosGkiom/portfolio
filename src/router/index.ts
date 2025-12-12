import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../core/pages/Home.vue";
import AboutView from "../core/pages/About.vue";
import { useMenuStore } from '@/core/store/menu';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "About" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const menuStore = useMenuStore();
  menuStore.closeMenu();

  document.title = (`Thanos Gkiomisis - ${to.meta.title || 'My Portfolio'}`) as string;
  next();
});

export default router;
