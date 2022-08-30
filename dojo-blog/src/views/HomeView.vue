<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    console.log("setup")

    /* note: these variables are not yet reactive; if their values update the paragraph in the template will not update  */
    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log('you clicked me')
    }

    return { name, age, handleClick }
  }
}
</script>
