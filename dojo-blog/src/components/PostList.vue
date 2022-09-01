<template>
  <div class="post-list">
    <div v-for="post in posts" v-bind:key="post.id">
      <SinglePost v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('component mounted in setup function'))
    onUnmounted(() => console.log('component unmounted in setup function'))
    onUpdated(() => console.log('component updated in setup function'))
  },
  mounted() {
    console.log('component mounted outside setup function')
  }
}

</script>

<style>

</style>