import ( ref ) from 'vue'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async() => {
    try {
      let data = await fetch('http://localhost:3000/posts/' + id)
      console.log(data)
      if (!data.ok) {
        throw Error('that post does not exists') /* which triggers the catch(err) */
      }
      post.value = await data.json()
    }
    catch (err) {
      error.value = err.message /* which posts the erorr message to the constant */
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default getPost