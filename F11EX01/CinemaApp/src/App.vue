<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      actors: []
    };
  },
  created() {
    if (!localStorage.actors) {
      this.actors = [
        {
          id: 1,
          name: "Tom Hanks",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
          nationality: "USA",
          link: "https://www.imdb.com/name/nm0000158/",
          age: 62,
          movies: [
            {
              name: "Forrest Gump",
              year: 1994,
              trailer: "https://www.youtube.com/embed/uPIEn0M8su0"
            },
            {
              name: "Saving Private Ryan",
              year: 1998,
              trailer: "https://www.youtube.com/embed/zwhP5b4tD6g"
            }
          ]
        },
        {
          id: 2,
          name: "Naomi Watts",
          photo:
            "https://m.media-amazon.com/images/M/MV5BMjIzMjY1NTA4OF5BMl5BanBnXkFtZTcwNjk3MDYwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
          nationality: "USA",
          link: "https://www.imdb.com/name/nm0915208/",
          age: 50,
          movies: []
        }
      ];
      localStorage.setItem("actors", JSON.stringify(this.actors));
    } else {
      this.actors = JSON.parse(localStorage.getItem("actors"));
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
