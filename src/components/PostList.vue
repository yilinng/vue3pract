<template>
  <PurePostList
    :posts="posts"
    @deletePost="onDeletePost"
  />
</template>

<script>
import PurePostList from './PurePostList.vue'

import { computed } from 'vue'

import { useStore } from 'vuex';

export default {
  name: 'PostList',
  components: { PurePostList },
  setup() {
    //👇 Creates a store instance
    const store = useStore()

    //👇 Retrieves the tasks from the store's state
    const posts = computed(() => store.state.posts);

    //👇 Dispatches the actions back to the store
    const onDeletePost = post => store.dispatch('deletePost', post);

    return { posts, onDeletePost }
  }
}
</script>

<style scoped>

</style>
