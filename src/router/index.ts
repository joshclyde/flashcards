import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/review/:flashcardSetId",
      name: "review",
      component: () => import("../views/ReviewView.vue"),
      props: true,
    },
    {
      path: "/tags/create",
      name: "tags_create",
      component: () => import("../views/CreateTagView.vue"),
    },
  ],
});

export default router;
