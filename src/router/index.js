import Vue from "vue";
import VueRouter from "vue-router";
import TestPath from "./testPath";
import snack24Path from "./snack24Path";
import kakaoPath from "@/router/kakaoPath";
import cleanPath from "@/router/cleanPath";

import Main from "@/views/Index";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "main",
      path: "/",
      component: Main,
    },
  ].concat(TestPath, snack24Path, kakaoPath, cleanPath),
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

export default router;
