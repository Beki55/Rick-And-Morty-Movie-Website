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
      path: "/episode/:id",
      name: "episode",
      component: () => import("../views/EpisodePage.vue"),
      props: true,
    },
    {
      path: "/character/:id",
      name: "character",
      component: () => import("../views/CharacterPage.vue"),
      props: true,
    },
    {
      path: "/location/:id",
      name: "location",
      component: () => import("../views/LocationPage.vue"),
      props: true,
    },
    {
      path: "/episodeSearch/:id",
      name: "Esearch",
      component: () => import("../components/EpisodeSearch.vue"),
      props: true,
    },
    {
      path: "/characterSearch/:id",
      name: "Csearch",
      component: () => import("../components/CharacterSearch.vue"),
      props: true,
    },
    {
      path: "/locationSearch/:id",
      name: "Lsearch",
      component: () => import("../components/LocationSearch.vue"),
      props: true,
    },
  ],
});

export default router;
