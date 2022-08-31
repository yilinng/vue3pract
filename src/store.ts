import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
       {
      "id": 1755,
      "title": "test from vuex!!",
      "body": "test here... ",
      "tags": [
        "vue"
      ]
    }
    ]
  
  },
  mutations: {
    DELETE_POST(state, id) {
      state.posts.filter(post => post.id !== id);
    },
    Update_Post(state, posts) {
      state.posts = posts
    },
    Find_Post(state, id) {
      return state.posts.filter(post => post.id == id);
    }
  },
  actions: {
    deletePost({ commit }, id) {
      commit('DELETE_POST', id);
    },
    updatePost({ commit }, posts) {
      commit('Update_Post', posts);
    },
    findPost({ commit }, id) {
      commit('Find_Post', id)
    }
  },
});