<template>
  <dir>

    <nav>
      <!--  bind to names defined in router/index.js  -->
      <router-link v-bind:to="{ name: 'home' }">Home</router-link> 
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
      <router-link v-bind:to="{ name: 'jobs' }">Jobs</router-link>
    </nav>

    <button @click="goRedirect">Redirect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>

    <router-view />
  
  </dir>
</template>

<script>
export default {
  methods: {
    goRedirect() {
      this.$router.push({ name: 'home' })
    },
    goBack() {
      this.$router.go(-1)  /* note: router, NOT route */
    },
    goForward() {
      this.$router.go(1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
