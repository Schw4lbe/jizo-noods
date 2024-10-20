import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrintView from "@/views/PrintView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    PrintView,
  },
  {
    path: "/print",
    name: "print",
    component: PrintView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
