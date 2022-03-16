<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length" class="posts">
    <PostList :posts="posts"/>
    <TagCloud :posts="posts"/>
  </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import { useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  components: { Spinner, PostList, TagCloud },
  
  setup(props) {
    const route = useRoute()
    
    const { error, posts, load } = getPosts()

    load()
    return { error, posts }
  },
}
</script>

<style scoped>
.posts {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

@media screen and (max-width: 600px) {
  .posts {
    display: block;
  }
}
 
</style>
