<template>
  <div v-if="error">
    <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
  <div v-else class="posts">
    <PostList />
    <TagCloud />
  </div>
</template>

<script>
//import getPosts from '../composables/getPosts'
//import { useRoute } from 'vue-router'
//import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
  name: 'PureHome',
  components: { PostList, TagCloud },
  props : {
    error: {
      type: Boolean, default: false
    }
  }
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
