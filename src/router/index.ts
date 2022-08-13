import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/index.vue"),
    },
    {
      path: "/my-other-page",
      name: "my-other-page",
      component: () => import("../pages/my-other-page.vue"),
    },
    {
      path: "/my-page-without-a-layout",
      name: "my-page-without-a-layout",
      component: () => import("../pages/my-page-without-a-layout.vue"),
    },
  ],
});
