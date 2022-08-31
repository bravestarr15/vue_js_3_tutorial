<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="name in matchingNames" v-bind:key="name">{{ name }}</div>
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

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames }
  }
}
</script>
