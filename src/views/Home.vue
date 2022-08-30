<template>
  <PureHome :error="error" />
</template>

<script>
import PureHome from './PureHome.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'Home',
  components: { PureHome },
  setup() {
    //const route = useRoute()
    const store = useStore()

    const error = computed(() => store.state.error);
    //const { error, posts, load } = getPosts()

    //load()
    return { error }
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
