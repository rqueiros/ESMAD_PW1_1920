<template>
  <div class="actor-list">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:80px">
      <h2>Actor Details: {{ getActor($route.params.actorId).name }}</h2>

      <router-link :to="{name:'actor-detail-profile'}">PROFILE</router-link>&nbsp;|&nbsp;
      <router-link :to="{name:'actor-detail-movies'}">MOVIES</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data: function() {
    return {
      actors: JSON.parse(localStorage.getItem("actors"))
    };
  },
  methods: {
    getActor(id) {
      return this.actors.filter(actor => actor.id === id)[0];
    }
  },
  components: {
    NavBar
  }
};
</script>
