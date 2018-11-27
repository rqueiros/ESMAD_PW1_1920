import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PersonaDetail from "./views/PersonaDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/personas/:personaId",
      name: "persona-detail",
      component: PersonaDetail
    }
  ]
});