<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div>
    <input type="text" ref="input_text_name">
    <button @click="handleClick">click me</button>
  </div>
  <div v-if="showModal">
    <Modal modal_theme="sale" @close_me="toggleModal">
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <div>
    <button @click="toggleModal">open modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.input_text_name)
      this.$refs.input_text_name.classList.add('active')
      this.$refs.input_text_name.focus()
    },
    toggleModal() {
     this.showModal = !this.showModal 
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
