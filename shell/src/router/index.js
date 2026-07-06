import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import NotFound from "../pages/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: () => import("productDetails/Detail").then((m) => m.default),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("productList/List").then((m) => m.default),
  },
  { path: "/:notFound(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
