<template>
  <div class="post">
    <router-link v-bind:to="{ name: 'details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <div>
      <span v-for="tag in post.tags" v-bind:key="tag">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...' /* 100 characters from position 0 in the string */
    })

    return { snippet }
  }
}
</script>

<style>

</style>