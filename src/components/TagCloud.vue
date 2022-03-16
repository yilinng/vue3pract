<template>
  <section class="tag-cloud">
    <h3>Tags</h3>
    <div v-if="tags.length">
      <div v-for="tag in tags" :key="tag" class="tagList">
      <router-link :to="{ name: 'Tag', params: { tag }}" class="tagLink">
        #{{ tag }}
      </router-link>
      </div>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </section>
</template>

<script>
import useTags from '../composables/useTags'
import Spinner from '../components/Spinner.vue'

export default {
  components: { Spinner },
  setup(props) {
    console.log(props.posts, 'from tagCloud');
   
    const { tags } = useTags(props.posts)
    
    return { tags }
  },
  props: ['posts']
}
</script>

<style>
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
  .tag-cloud a {
    color: #ccc;
    text-decoration: none;
    font-weight: bold;
  }
  .tag-cloud a.router-link-active {
    color: #ff8800;
    font-weight: bold;
  }
 @media screen and (max-width: 600px) {
   .tag-cloud .tagList {
    display: inline-block;
  }

 } 
</style>
