import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import GuessNumber from "./views/GuessNumber.vue";
import Scores from "./views/Scores.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/guess",
      name: "guess",
      component: GuessNumber
    },
    {
      path: "/scores",
      name: "scores",
      component: Scores
    }
  ]
});