<template>
  <div>
    <va-navbar color="navColor" shape class="mb-2">
    <template #left>
      <va-navbar-item><router-link to="/">Home</router-link></va-navbar-item>
    </template>
    <template #center>
      <va-navbar-item>&nbsp;</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item><router-link to="/about">About</router-link></va-navbar-item>
    </template>
  </va-navbar>
  </div>
  <router-view/>
</template>

<style>
body {
  background-color: #e5eccc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dbe1e7!important;
}

p {
  color: #dbe1e7!important;
}

nav a {
  font-weight: bold;
  color: #fff!important;
}
</style>
