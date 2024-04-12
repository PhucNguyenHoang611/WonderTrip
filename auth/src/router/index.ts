import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/sign-in",
    component: SignIn
  },
  {
    path: "/sign-up",
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;