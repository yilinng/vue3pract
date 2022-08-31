<template>
  <div
    v-if="!itemDelete"
    class="post"
  >
    <router-link
      :to="{ name: 'Details', params: { id: post.id } }"
      class="title"
    >
      <h2>{{ post.title }}</h2>
    </router-link>
    <div class="editList">
      <router-link
        :to="{
          name: 'Edit',
          params: {
            id: post.id
          },
        }"
        class="edit"
      >
        <h3>Edit</h3>
      </router-link>
      <h3
        class="deletePost"
        @click="handeleDelete"
      >
        delete
      </h3>
    </div>
    <p class="content">
      {{ snippet }}
    </p>
    <div class="tagList">
      <span
        v-for="tag in post.tags"
        :key="tag"
      > #{{ tag }} </span>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "SinglePost",
  props: {
    post: {
      type: Object,
      default: () => ({ id: "", title: "", body: "", tags: [] }),
      validator: (post) =>
        ["id", "title", "body", "tags"].every((key) => key in post),
    },
  },
  emits: ["delete-post", "clickItem"],
  setup(props, { emit }) {
    const itemDelete = ref(false);
    const handeleDelete = () => {
      itemDelete.value = true;
      emit("clickItem", itemDelete);

      emit("delete-post", props.post.id);
      // Emit Events (Method)
      /*
    return fetch('http://localhost:3000/posts/' + props.post.id, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .catch(error => console.log(error))
  */
    };
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { snippet, handeleDelete, itemDelete };
  },
};
</script>

<style scoped>
.post {
  max-width: 750px;
  max-height: 500px;
  border: 1px solid #eee;
  margin: 10px;
  border: 2px solid #eee;
}

.post:hover {
  border: 2px solid orange;
}

.post .title {
  text-decoration: none;
  color: #2e8b57;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
}

.post .title:hover {
  color: #ff4500;
}

.post .editList {
  display: flex;
  justify-content: center;
  height: 100%;
}

.post .editList .edit {
  margin-right: 10px;
  color: green;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}

.post .editList > a:hover {
  color: yellowgreen;
}
.post .editList .deletePost {
  cursor: pointer;
  color: white;
  background-color: #4682b4;
  padding: 10px;
  border: 2px solid #4682b4;
  border-radius: 10px;
  font-size: 18px;
}

.post .editList .deletePost:hover {
  background-color: #87cefa;
  border: 2px solid #4682b4;
}

.post .content {
  max-width: 570px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align-last: center;
  text-align: center;
}

.post .tagList {
  max-width: 570px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
}

.post .tagList > span {
  margin-right: 10px;
  font-weight: 700;
  color: yellowgreen;
}

/*
  @media screen and (max-width: 600px) {
    .post {

    }
  }
*/
</style>