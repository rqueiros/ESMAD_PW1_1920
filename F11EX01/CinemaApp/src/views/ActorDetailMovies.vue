<template>
  <div class="actor-detail-movies">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:20px">
      <table class="table table-dark table-hover table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in getActor($route.params.actorId).movies" :key="movie.id">
            <td>{{ movie.name }}</td>
            <td>{{ movie.year }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="seeTrailer(movie.trailer)">SEE TRAILER</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!--dialog-->
    <dialog id="dlgTrailer">
      <p>
        <iframe
          id="ifrTrailer"
          width="560"
          height="315"
          src
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>
      <p>
        <button class="btn btn-danger btn-cm" @click="closeTrailer()">CLOSE</button>
      </p>
    </dialog>
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
    },
    seeTrailer(trailerId) {
      document.getElementById("ifrTrailer").src = trailerId;
      document.getElementById("dlgTrailer").showModal();
    },
    closeTrailer() {
      document.getElementById("dlgTrailer").close();
    }
  },
  components: {
    NavBar
  }
};
</script>
