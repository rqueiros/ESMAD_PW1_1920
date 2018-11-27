<template>
  <div>
    <ul class="nav flex-column">
      <li class="nav-item" v-for="persona in personas" :key="persona.id">
        <router-link
          :to="{name: 'persona-detail', params: {personaId: persona.id, persona: persona}}"
        >{{persona.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonaList",
  data: function() {
    return {
      personas: []
    };
  },
  created() {
    this.personas = [
      {
        id: 1,
        name: "Tim Berners-Lee",
        photo: "",
        nacionality: "",
        age: 64
      },
      {
        id: 2,
        name: "Freddie Mercury",
        photo: "",
        nacionality: "",
        age: 61
      },
      {
        id: 3,
        name: "Barak Obama",
        photo: "",
        nacionality: "",
        age: 59
      }
    ];
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
