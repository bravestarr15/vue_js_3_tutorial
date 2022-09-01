<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-bind:posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async() => {
      try {
        let data = await fetch('http://localhost:3000/post')
        console.log(data)
        if (!data.ok) {
          throw Error('no data available') /* which triggers the catch(err) */
        }
      }
      catch (err) {
        error.value = err.message /* which posts the erorr message to the constant */
        console.log(error.value)
      }
    }

    load()

    return { posts }
  }
}
</script>
