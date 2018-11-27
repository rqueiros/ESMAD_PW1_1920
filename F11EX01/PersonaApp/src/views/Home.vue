<template>
  <div class="home">This is my Home...
    <!--Now inject the component Personas -->
    <PersonaList/>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonaList from "@/components/PersonaList.vue";

export default {
  components: {
    PersonaList
  }
};
</script>
