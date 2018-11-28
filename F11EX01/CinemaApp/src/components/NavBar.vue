<template>
  <!-- Renders the navbar with the respective router-links -->
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <a class="navbar-brand" href="/">CinemaAPP</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'actor-list' }" :class="{ 'nav-link': true }"
          >Actor List</router-link
        >
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'contacts' }" :class="{ 'nav-link': true }"
          >Contacts</router-link
        >
      </li>
    </ul>
  </nav>
</template>
