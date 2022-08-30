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

    let setup_name = 'mario'
    let setup_age = 30

    return { name: setup_name, age : setup_age }
  }
}
</script>
