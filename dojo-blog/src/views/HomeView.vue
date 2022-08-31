<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'

export default {
  name: 'HomeView',
  /* setup fires first, before anything else */
  setup() {
    const name = computed(() => {
      return 'shaun'
    })

    return { name }
  }
}
</script>
