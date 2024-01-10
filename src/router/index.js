import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Tweets from "../views/Tweets.vue";
import NotFound from "../views/PageNotFound.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tweets",
    name: "tweets",
    component: Tweets,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
