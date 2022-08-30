<template>
  <section class="tag-cloud">
    <h3>Tags</h3>
    <div v-if="!loading">
      <div
        v-for="tag in tags"
        :key="tag"
        class="tagList"
      >
        <router-link
          :to="{ name: 'Tag', params: { tag }}"
          class="tagLink"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </section>
</template>

<script>
import useTags from '../composables/useTags'
import Spinner from '../components/Spinner.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TagCloud',
  components: { Spinner },
  props: {
    posts: { type: Array, required: true, default : () => [] },
    loading: { type: Boolean, default: false },
  }, 
  setup(props) {

    const store = useStore()
    const { tags } = useTags(store.state.posts)
    //const { tags } = useTags(props.posts)
    
    return { tags }
  }
}
</script>

<style scoped>
  .tag-cloud {
    padding: 10px;
    max-width: 400px;
  }
  .tag-cloud h3 {
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
  }

  .tag-cloud .tagList {
    display: block;
  }

  .tag-cloud div {
    display: inline-block;
    padding: 10px;
  }
  .tag-cloud .tagList a {
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
  }
  .tag-cloud .tagList a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
 @media screen and (max-width: 600px) {
   .tag-cloud .tagList {
    display: inline-block;
  }

 } 
</style>
