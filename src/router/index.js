import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ResetPassword from "../views/ResetPassword.vue"

import Blogs from "../views/Blogs.vue"
import ViewBlog from "../views/ViewBlog.vue"

import CreatePost from "../views/CreatePost.vue"
import BlogPreview from "../views/BlogPreview.vue"
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
  {
    path: "/blog:blogID",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: "View Blog Post",
    }
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: CreatePost,
  },
  {
    path: "/Post-Preview",
    name: "BlogPreview",
    component: BlogPreview,
  },
  {
    path: "/Profile",
    name: "Profile"
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
