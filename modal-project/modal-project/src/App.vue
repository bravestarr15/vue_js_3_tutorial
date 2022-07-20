<template>
  <h1>{{ title }}</h1>
  <div>
    <input type="text" ref="input_text_name">
    <button @click="handleClick">click me</button>
  </div>
  <Modal modal_header="Sign up for the Giveaway!" modal_text="Grab your ninja swag for half price!" />
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)'
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.input_text_name)
      this.$refs.input_text_name.classList.add('active')
      this.$refs.input_text_name.focus()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
