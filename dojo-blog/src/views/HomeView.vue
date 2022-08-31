<template>
  <div class="home">
    <h1>Home</h1>
    <div v-for="name in names" v-bind:key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    return { names }
  }
}
</script>
