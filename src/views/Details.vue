<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div
    v-if="post"
    class="post"
  >
    <h3>{{ post.title }}</h3>
    <p class="pre">
      {{ post.body }}
    </p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "../composables/getPost";
//import { useRoute } from "vue-router";
import Spinner from "../components/Spinner.vue";

export default {
  components: { Spinner },
  props: {
    id: {
      type: String,
      required: true
    },
  },
  setup(props) {
    //const route = useRoute();
    //console.log(route)
    //console.log(route.params)
    const { error, post, load } = getPost(props.id);
    load();
    return { error, post };
  },
};
</script>

<style>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>