import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Profile from "../views/Profile.vue"

import Blogs from "../views/Blogs.vue"
import ViewBlog from "../views/ViewBlog.vue"
import EditBlog from "../views/EditBlog.vue"

import CreatePost from "../views/CreatePost.vue"
import BlogPreview from "../views/BlogPreview.vue"

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      requiresAuth: false,
      hideAuth: false,
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requiresAuth: false,
      hideAuth: true,
    }
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register",
      requiresAuth: false,
      hideAuth: true,
    }
  },
  {
    path: "/ResetPassword",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "Reset Password",
      requiresAuth: false,
      hideAuth: true,
    }
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs",
      requiresAuth: false,
      hideAuth: false,
    }
  },
  {
    path: "/blog/:blogID",
    name: "ViewBlog",
    component: ViewBlog,
    meta: {
      title: "View Blog Post",
      requiresAuth: false,
      hideAuth: false,
    }
  },
  {
    path: "/edit-blog/:blogID",
    name: "EditBlog",
    component: EditBlog,
    meta: {
      title: "Edit Blog Post",
      requiresAuth: true,
      hideAuth: false,
    }
  },
  {
    path: "/CreatePost",
    name: "CreatePost",
    component: CreatePost,
    meta: {
      title: 'Create Post',
      requiresAuth: true,
      hideAuth: false,
    },
  },
  {
    path: "/Post-Preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: {
      title: 'Post Preview',
      requiresAuth: true,
      hideAuth: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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
      title: 'Page Not Found',
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
