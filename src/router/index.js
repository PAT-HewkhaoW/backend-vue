import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import TestView from "../views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",

      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/profile",
    },
    {
      path: "/test",
      component: TestView,
    },
    {
      path: "/user",
      children: [
        { path: "", component: HomeView },
        {
          path: "signin",
          name: "user-signin",
          component: SignInView,
        },
        {
          path: "signup",
          name: "user-signup",
          component: SignUpView,
        },
      ],
    },
  ],
});

export default router;
