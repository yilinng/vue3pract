<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div v-if="error">
    {{ error }}
  </div>
  <div
    v-if="post"
    class="edit"
  >
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input
        v-model="title"
        type="text"
        required
      >
      <label>Content:</label>
      <textarea
        v-model="body"
        required
      />
      <label>Tags (hit enter to add a tag):</label>
      <input
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeydown"
      >
      <div
        v-for="tag in tags"
        :key="tag"
        class="pill"
        @click="handleClickTag(tag)"
      >
        #{{ tag }}
      </div>
      <button>Update Post</button>
    </form>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Spinner from "../components/Spinner.vue";
import { useStore } from "vuex";

export default {
  components: { Spinner },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {

    const router = useRouter();

    const store = useStore();
    //👇 Dispatches the state from store
    //https://vuex.vuejs.org/guide/getters.html
    const post = store.state.posts.filter((post) => post.id == props.id);

    const OnReflashPage = () => router.push("/");

    if (post.length < 1) {
      OnReflashPage();
      return
    }
    const title = ref(post[0].title);
    const body = ref(post[0].body);
    const tags = ref(post[0].tags);
    const tag = ref("");
    const error = ref("");

    //console.log(post, "edit post...");

    const handleClickTag = (tag) => {
      const filteredTags = tags.value.filter((element) => element !== tag);
      tags.value = filteredTags;
      console.log("work...", filteredTags, tag);
    };

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const handleSubmit = async () => {
      const post = {
        id: props.id,
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      await fetch("http://localhost:3000/posts/" + props.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      router.push({ name: "Home" });
    };

    return {
      title,
      body,
      tag,
      tags,
      error,
      post,
      handleSubmit,
      handleKeydown,
      handleClickTag,
    };
  },
};
</script>
<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>