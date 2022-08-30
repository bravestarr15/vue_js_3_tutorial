<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <div><button @click="handleClick">click me</button></div>
    <div><input type="text" v-model="name"></div>
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
/*
    let name = 'mario'
    let age = 30
*/
    /* make them reactive by using refs */
    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    return { name, age, handleClick, p }
  }
}
</script>
