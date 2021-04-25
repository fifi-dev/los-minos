import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Home from "../views/Home.vue";
import Galerie from "../views/Galerie.vue";
import Biographie from "../views/Biographie.vue";
import Pre_quizz from "../views/Pre_quizz.vue";
import Quizz from "../views/Quizz.vue";
import Mentions from "../views/Mentions.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      header: 1
    }
  },
  {
    path: "/galerie",
    name: "Galerie",
    component: Galerie,
    meta: {
      header: 1
    }
  },
  {
    path: "/biographie",
    name: "Biographie",
    component: Biographie,
    meta: {
      header: 1
    }
  },
  {
    path: "/pre_quizz",
    name: "Pre_quizz",
    component: Pre_quizz,
    meta: {
      header: 1
    }
  },
  {
    path: "/quizz",
    name: "Quizz",
    component: Quizz,
    meta: {
      header: 1
    }
  },
  {
    path: "/mentions",
    name: "Mentions",
    component: Mentions,
    meta: {
      header: 1
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      header: 1
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta: {
        header: 1
      }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
