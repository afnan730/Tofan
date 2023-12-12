import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Tweets from "../views/Tweets.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
