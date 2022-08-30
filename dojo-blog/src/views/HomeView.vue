<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    console.log("setup")

    /* this is undefined in setup */
    console.log(this)

    const p = ref(null)

    /* note: these variables are not yet reactive; if their values update the paragraph in the template will not update  */
    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p)
      console.log(p.value)
    }

    return { name, age, handleClick, p }
  }
}
</script>
