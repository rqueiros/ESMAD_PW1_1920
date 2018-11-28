<template>
  <div class="contacts">
    <!-- Renders the navbar -->
    <NavBar />
    <!-- Container for render all the remaining components -->
    <div class="container" style="margin-top:80px"><h2>My contacts</h2></div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
