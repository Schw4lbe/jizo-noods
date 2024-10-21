import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrintView from "@/views/PrintView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import ImprintView from "@/views/ImprintView.vue";

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
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
  },
  {
    path: "/imprint",
    name: "imprint",
    component: ImprintView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
