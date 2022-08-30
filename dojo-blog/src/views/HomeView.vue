<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    const ninjaOne = ref( { name: 'mario', age: 30 } )

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    return { ninjaOne, updateNinjaOne }
  }
}
</script>
