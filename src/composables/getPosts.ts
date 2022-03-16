import { ref, Ref } from 'vue'

const getPosts = () => {

    const posts: Ref<any[]>= ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if(!data.ok) {
          throw Error('no available data')
        }
        posts.value = await data.json()
      }
      catch(err: any) {
        error.value = err.message
      }
    }

    return { posts, error, load }
}

export default getPosts
