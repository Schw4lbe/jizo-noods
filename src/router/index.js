import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import ImprintView from "@/views/ImprintView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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

// Conditionally add the /print route
if (process.env.VUE_APP_INCLUDE_PRINT === "true") {
  routes.push({
    path: "/print",
    name: "print",
    component: () => import("@/views/PrintView.vue"),
  });
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
