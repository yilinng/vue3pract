import { ref } from 'vue'

const getPost = (id: string) => {

    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        if(!data.ok) {
          throw Error('this post does not exist')
        }
        post.value = await data.json()
      }
      catch(err: any) {
        error.value = err.message
      }
    }

    return {post, error, load}
}

export default getPost
