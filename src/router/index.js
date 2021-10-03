import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth"

import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Home',
      requiresAuth: false,
      hideAuth: false,
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: 'Login',
      requiresAuth: false,
      hideAuth: true,
    },
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: 'Register',
      requiresAuth: false,
      hideAuth: true,
    },
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword.vue"),
    meta: {
      title: 'Reset Password',
      requiresAuth: false,
      hideAuth: true,
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue"),
    meta: {
      title: 'Blogs',
      requiresAuth: false,
      hideAuth: false,
    },
  },
  {
    path: "/blog/:blogID",
    name: "ViewBlog",
    component: () => import("../views/ViewBlog.vue"),
    meta: {
      title: "View Blog Post",
      requiresAuth: false,
      hideAuth: false,
    }
  },
  {
    path: "/edit-blog/:blogID",
    name: "EditBlog",
    component: () => import("../views/EditBlog.vue"),
    meta: {
      title: "Edit Blog Post",
      requiresAuth: true,
      hideAuth: false,
    }
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
    meta: {
      title: 'Create Blog',
      requiresAuth: true,
      hideAuth: false,
    },
  },
  {
    path: "/Post-Preview",
    name: "BlogPreview",
    component: () => import("../views/BlogPreview.vue"),
    meta: {
      title: 'Post Preview',
      requiresAuth: true,
      hideAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      title: 'Profile',
      requiresAuth: true,
      hideAuth: false,
    },
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
    meta: {
      title: 'Profile',
      requiresAuth: false,
      hideAuth: false,
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | VueBlog`;
  next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  if (to.matched.some((res) => res.meta.requiresAuth)) {
    if (!user) return next({ name: 'Home' });
  }
  return next();
});

router.beforeEach(async (to, from, next) => {
  let user = firebase.auth().currentUser;
  if (to.matched.some((res) => res.meta.hideAuth)) {
    if (user) return next({ name: 'Home' });
  }
  return next();
});

export default router;
