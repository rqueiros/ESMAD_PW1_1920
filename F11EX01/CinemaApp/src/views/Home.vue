<template>
  <div class="home">
    <!-- Renders the navbar -->
    <NavBar/>
    <!-- Renders the welcome message -->
    <div class="container" style="margin-top:80px">
      <Welcome/>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  components: {
    NavBar,
    Welcome
  }
};
</script>
