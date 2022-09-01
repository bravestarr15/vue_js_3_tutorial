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

    return { posts }
  }
}
</script>
