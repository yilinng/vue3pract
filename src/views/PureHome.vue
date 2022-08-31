<template>
  <div v-if="error">
    <div class="wrapper-message">
      <span class="icon-face-sad" />
      <div class="title-message">
        Oh no!
      </div>
      <div class="subtitle-message">
        Something went wrong
      </div>
    </div>
  </div>
  <div
    v-else
    class="posts"
  >
    <PostList :posts="posts" />
    <TagCloud :posts="posts" />
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
//import { useRoute } from 'vue-router'
//import Spinner from '../components/Spinner.vue'
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import { useStore } from "vuex";
//import { useRouter, START_LOCATION } from "vue-router";

export default {
  name: "PureHome",
  components: { PostList, TagCloud },
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { posts, getError, load } = getPosts();

    load();

    //const router = useRouter();

    //console.log(posts, "from data json");

    const store = useStore();

    //👇 Dispatches the actions back to the store
    store.dispatch("updatePost", posts);

    return { posts, getError };
  },
};
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