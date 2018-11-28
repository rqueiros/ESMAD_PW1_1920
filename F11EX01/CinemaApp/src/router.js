import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ActorList from "./views/ActorList.vue";
import ActorDetail from "./views/ActorDetail.vue";
import ActorDetailProfile from "./views/ActorDetailProfile.vue";
import ActorDetailMovies from "./views/ActorDetailMovies.vue";
import Contacts from "./views/Contacts.vue";


Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/actors",
      name: "actor-list",
      component: ActorList
    },
    {
      path: "/actors/:actorId",
      name: "actor-detail",
      component: ActorDetail
    },
    {
      path: "/actors/:actorId/profile",
      name: "actor-detail-profile",
      component: ActorDetailProfile
    },
    {
      path: "/actors/:actorId/movies",
      name: "actor-detail-movies",
      component: ActorDetailMovies
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});