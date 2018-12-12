<template>
  <div class="home">
    <h1>GuessApp</h1>
    <img src="http://www.dr-mikes-math-games-for-kids.com/linkimgs/GuessMyNumber.png" alt>
    <p>
      <router-link :to="{name: 'guess'}">START NEW GAME</router-link>
    </p>
    <p>
      <router-link :to="{name: 'scores'}">HIGH SCORES</router-link>
    </p>
  </div>
</template>

