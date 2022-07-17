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

// create an app to control part of the webpage
const conditional_vue_app = Vue.createApp({
  data() {
    return{
      showSong: true,
      song_title: 'Yellow Submarine',
      song_band: 'The Beatles',
      x: 0,
      y: 0
    }
  },
  methods: {
    toggleShowSong() {
      // ! acts as a NOT statement
      this.showSong = !this.showSong 
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      // check if data has a value and only log to console if it does
      // this makes this function universal for all cases regardless of whether data is supplied
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

const for_loop_app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books_array: [
        { title: 'name of the wind', author: 'patrick rothfuss', cover_img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', cover_img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'jim kelly', cover_img: 'assets/3.jpg', isFav: true },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      // ! acts as a NOT statement
      this.showBooks = !this.showBooks 
    },
    toggleFav(liBook) {
      liBook.isFav = !liBook.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books_array.filter((liBook) => liBook.isFav)
    }
  }
})

// mount the app where you find the element with the id #vue_anchor
vue_app.mount('#vue_anchor')
conditional_vue_app.mount('#cond_vue_anchor')
for_loop_app.mount('#vue_loops_anchor')

