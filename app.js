console.log('hello, vue')

// create an app to control part of the webpage
const vue_app = Vue.createApp({
  // data or functions to react to events

  // could define the template here, but usually do it within the html
  // template: '<h2>I am the template</h2>'

  // to make interactive to events
  // create data function
  data() {
    // return an object
    return {
      obj_book_title: 'The Final Empire',
      obj_book_author: 'Brandon Sanderon',
      obj_book_age: 45
    }
  },
  // create methods
  methods: {
    changeObjTitle() {
      console.log('you clicked changeObjTitle')
      this.obj_book_title = 'new title [alt]'
    },
    changeObjTitleInput(titleChg) {
      console.log('you clicked changeObjTitleInput')
      this.obj_book_title = titleChg
    }
  }
})

// mount the app where you find the element with the id #vue_anchor
vue_app.mount('#vue_anchor')
