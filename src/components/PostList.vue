<template>
  <main class="post-list">
      <div v-for="post in posts" :key="post.id" data-test="postList">
          <!-- <h3>{{ post.title }}</h3> -->
          <SinglePost :post="post" @clickItem="onClickChild"/>
      </div>
  </main>

</template>

<script>
import { ref } from 'vue'
// component imports
import SinglePost from './SinglePost.vue'

export default {
  props: ['posts'],
  components: { SinglePost },
  setup() {
    const postChange = ref(null)

    const onClickChild = (val) => {

      postChange.value = val.value
      console.log(postChange.value)
    }

    return {onClickChild, postChange}
  }
}
</script>

<style scoped>

</style>
