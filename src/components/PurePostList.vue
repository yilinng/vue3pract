<template>
  <main class="post-list">
    <div v-if="!loading">
      <div
        v-for="post in posts"
        :key="post.id"
        data-test="postList"
      >
        <!-- <h3>{{ post.title }}</h3> -->
        <SinglePost
          :post="post"
          @clickItem="onClickChild"
          @delete-post="onDeletePost"
        />
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
// component imports
import SinglePost from './SinglePost.vue'
import Spinner from './Spinner.vue'
//import { useStore } from 'vuex';

export default {
  name: 'PurePostList',
  components: { SinglePost, Spinner },
  props: {
    posts : { type: Array, required: true, default : () => [] },
    loading: { type: Boolean, default: false },
  },
  emits: ['delete-post'],
  setup(props, { emit }) {
    const postChange = ref(null)

    const onClickChild = (val) => {
      postChange.value = val.value
      console.log(postChange.value)
    }

    const onDeletePost = (postId) => {
      console.log(postId, 'from postlist')
      emit('delete-post', postId)
    }

    return { onClickChild, postChange, onDeletePost }
  }
}
</script>

<style scoped>

</style>
