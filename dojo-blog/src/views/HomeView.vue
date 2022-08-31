<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <div v-for="name in names" v-bind:key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    return { names, search }
  }
}
</script>
