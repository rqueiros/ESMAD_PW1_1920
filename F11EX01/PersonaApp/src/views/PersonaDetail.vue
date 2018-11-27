<template>
  <div class="home">
    This is my PersonaDetail...
    <strong>
      <p>Name: {{getPersona($route.params.personaId).name}}</p>
      <p>Age: {{getPersona($route.params.personaId).age}}</p>
      <p>
        <a href="javascript:history.back()">back</a>
      </p>
    </strong>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      personas: JSON.parse(localStorage.getItem("personas"))
    };
  },
  methods: {
    getPersona(id) {
      return this.personas.filter(persona => persona.id === id)[0];
    }
  }
};
</script>



