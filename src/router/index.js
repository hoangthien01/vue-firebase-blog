import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Blogs from "../views/Blogs.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
