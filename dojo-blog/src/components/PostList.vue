<template>
  <div class="post-list">
    <div v-for="post in posts" v-bind:key="post.id">
      <h3>{{ post.title }}</h3>
      <SinglePost v-bind:post="post" />
    </div>
  </div>
</template>

<script>

import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    console.log(props)
    console.log(props.posts)
  }
}

</script>

<style>

</style>