<template>
  <div class="home">
    This is my PersonaDetail...
    <strong>
      <p>Name: {{$route.params.persona.name}}</p>
      <p>Age: {{$route.params.persona.age}}</p>
      <p>
        <a href="javascript:history.back()">back</a>
      </p>
    </strong>
  </div>
</template>


