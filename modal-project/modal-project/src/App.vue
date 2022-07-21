<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div>
    <input type="text" ref="input_text_name">
    <button @click="handleClick">click me</button>
  </div>
  <div>
    <p><button @click="toggleModal">open modal</button></p>
    <p><button @click.alt="toggleModalTwo">open modal two (alt + click)</button></p>
  </div>
  <teleport to="#modals" v-if="showModal">
    <Modal modal_theme="sale" @close_me="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Ninja Giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close_me="toggleModalTwo">
      <h1>Ninja Time!</h1>
      <p>Check out this second modal!!</p>
    </Modal>
  </teleport>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      showModal: false,
      showModalTwo: false
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
    },
    toggleModalTwo() {
     this.showModalTwo = !this.showModalTwo 
    }
  }
}
</script>

<style>
#app, #modals {
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
