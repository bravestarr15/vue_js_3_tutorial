<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList v-bind:posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
  
    /* note that getPosts doesn't run the load function, it simply defines it
       so we need to extract load from the getPosts() return */
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>
