<template>
  <div class="actor-list">
    <!--Renders the navbar-->
    <NavBar/>
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:80px">
      <h2>Actor List</h2>
      <table class="table table-dark table-hover table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="actor in actors" :key="actor.id">
            <td>{{actor.id}}</td>
            <td>{{actor.name}}</td>
            <td>{{actor.nationality}}</td>
            <td>
              <router-link
                :to="{name: 'actor-detail', params:{actorId: actor.id}}"
                tag="button"
                :class="{'btn':true, 'btn-danger':true, 'btn-sm': true}"
              >more info</router-link>
            </td>
          </tr>
        </tbody>
      </table>
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
  components: {
    NavBar
  }
};
</script>

