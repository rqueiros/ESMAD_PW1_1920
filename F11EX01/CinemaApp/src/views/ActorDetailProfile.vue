<template>
  <div class="actor-detail-profile">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:20px">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="card" style="width:300px">
            <img
              class="card-img-top"
              :src="getActor($route.params.actorId).photo"
              alt="Card image"
              style="width:100%"
            >
            <div class="card-body">
              <h4 class="card-title">{{ getActor($route.params.actorId).name }}</h4>
              <p class="card-text">Nationality: {{ getActor($route.params.actorId).nationality }}</p>
              <p class="card-text">Age: {{ getActor($route.params.actorId).age }}</p>
              <a :href="getActor($route.params.actorId).link" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
      </div>
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
