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

    const p = ref(null)
    /* you can't reference p here, since it hasn't been returned to the dom yet */

    /* note: these variables are not yet reactive; if their values update the paragraph in the template will not update  */
    let name = 'mario'
    let age = 30

    const handleClick = () => {

    }

    return { name, age, handleClick, p }
  }
}
</script>
