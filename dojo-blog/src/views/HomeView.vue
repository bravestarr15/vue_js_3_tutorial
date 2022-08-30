<template>
  <div class="home">
    <h1>Home</h1>

    <h2>Refs</h2>
    <p>My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h2>Reactive</h2>
    <p>My name is {{ ninjaTwo.name }} and my age is {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    const ninjaOne = ref( { name: 'mario', age: 30 } )
    const ninjaTwo = reactive( { name: 'luigi', age: 35 } )

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      /* with reactive we don't need to list the value property */
      ninjaTwo.age = 45
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo }
  }
}
</script>
