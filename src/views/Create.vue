<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input
        v-model="title"
        type="text"
        name="title"
        required
      >
      <label>Content:</label>
      <textarea
        v-model="body"
        name="body"
        required
      />
      <label>Tags (hit enter to add a tag):</label>
      <input
        v-model="tag"
        type="text"
        name="tag"
        @keydown.enter.prevent="handleKeydown"
      >
      <div
        v-for="tag in tags"
        :key="tag"
        class="pill"
      >
        #{{ tag }}
      </div>
      <button type="submit">
        Add Post
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Create",
  props: {},
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");

    const router = useRouter();
    //console.log(router)
    //router.go(1)
    //router.go(-1)

    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g, ""); // remove all whitespace
        tags.value.push(tag.value);
      }
      tag.value = "";
    };
    const handleSubmit = async () => {
      const post = {
        id: Math.floor(Math.random() * 10000),
        title: title.value,
        body: body.value,
        tags: tags.value,
      };
      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });

      router.push({ name: "Home" });
    };
    return { body, title, tags, tag, handleKeydown, handleSubmit };
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