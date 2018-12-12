<template>
  <div class="home">
    <h2>High Scores</h2>
    <table>
      <tr>
        <th>#</th>
        <th>name</th>
        <th>Attempts</th>
      </tr>
      <tr v-for="score in scores" :key="score.name">
        <td></td>
        <td>{{score.name}}</td>
        <td>{{score.attempts}}</td>
      </tr>
    </table>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
export default {
  name: "scores",
  data: function() {
    return {
      scores: []
    };
  },
  created() {
    this.scores = this.$store.getters.getScores;
  }
};
</script>
