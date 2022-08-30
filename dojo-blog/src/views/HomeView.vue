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
    /* you can't reference p here, since it hasn't been returned to the dom yet */

    /* note: these variables are not yet reactive; if their values update the paragraph in the template will not update  */
    let name = 'mario'
    let age = 30

    const handleClick = () => {
    /* note: we can only reference p here because
       the setup will have run once already
         which includes returning p to the dom
       AND THEN we click the button
    */
      console.log(p)
      console.log(p.value)
      /* add a class of test to the paragraph in the template */
      p.value.classList.add('test')
      /* change the text in the paragraph */
      p.value.textContent = 'hello, ninjas'
    }

    return { name, age, handleClick, p }
  }
}
</script>
