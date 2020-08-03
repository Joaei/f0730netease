import Vue from "vue";
import VueRouter from "vue-router";
import Vuepage from "../views/Vuepage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/vue",
    name: "Vuepage",
    component: Vuepage
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/",
    redirect: "/page1"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/page1",
        name: "Page1",
        component: () => import("../views/Page1.vue")
      },
      {
        path: "/page2",
        name: "Page2",
        component: () => import("../views/Page2.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
