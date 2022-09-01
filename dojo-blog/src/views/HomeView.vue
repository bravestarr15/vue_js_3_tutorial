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
        let data = await fetch('http://localhost:3000/posts')
        console.log(data)
      }
      catch (err) {

      }
    }

    load()
    
    return { posts }
  }
}
</script>
