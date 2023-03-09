import { createRouter, createWebHistory } from "vue-router";
import MainPage from './pages/MainPage.vue'
import ProfilePage from './pages/ProfilePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
    },
    {
      path: "/profile",
      name: "ProfilePage",
      component: ProfilePage,
    },
  ],
});

export default router;
