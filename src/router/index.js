import Vue from "vue";
import VueRouter from "vue-router";
import utils from "../utils/utils.js";

import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Coffee from "../views/Coffee.vue"
import Milk from "../views/Milk.vue"
import Tea from "../views/Tea.vue"
import NotFound from "../views/NotFound.vue"

import NewOverview from "../views/NewOverview.vue"
import Episode from "../views/Episode.vue"
import Season from "../views/Season.vue"
import Pilot from "../views/Pilot.vue"

import OldOverview from "../views/OldOverview.vue"
import Rick from "../views/Rick.vue"
import Morty from "../views/Morty.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
      children: [
        {
          path: "",
          redirect: "coffee",
        }, 
        {
          path: "coffee",
          name: "coffee",
          component: Coffee,
        },
        {
          path: "milk",
          name: "milk",
          component: Milk,
        },
        {
          path: "tea",
          name: "tea",
          component: Tea,
        },
      ]
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

let newRoutes = [  {
  path: "/overview",
  component: NewOverview,
    children: [
      {
        path: "",
        redirect: "season",
      }, 
      {
        path: "season",
        name: "season",
        component: Season,
      },
      {
        path: "episode",
        name: "episode",
        component: Episode,
      },
      {
        path: "pilot",
        name: "pilot",
        component: Pilot,
      },
    ]
},]

let oldRoutes = [  {
  path: "/overview",
  component: OldOverview,
    children: [
      {
        path: "",
        redirect: "rick",
      }, 
      {
        path: "rick",
        name: "rick",
        component: Rick,
      },
      {
        path: "morty",
        name: "morty",
        component: Morty,
      },
    ]
},]

console.log('utils.seasonality',utils.seasonality)
// utils.fakePromise()

utils.fake().then(function(isEnabled){
  console.log('isEnabled',isEnabled);
  // router.addRoutes(isEnabled ? newRoutes : oldRoutes)
  if(isEnabled)
  router.addRoute(...newRoutes)
  else 
  router.addRoute(...oldRoutes)
})
.catch(function(error){
  console.error(error);
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
