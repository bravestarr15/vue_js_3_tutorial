<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    console.log("setup")

    let name = 'mario'
    let age = 30

    return { name, age }
  }
}
</script>
