import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        "id": 1752,
        "title": "What is Vue.js?!!",
        "body": "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capableaaaa of powering sophisticated Single-Page Applications when used in combination ",
        "tags": [
          "html",
          "vue"
        ]
      },
      {
        "id": 3637,
        "title": "aesthetically",
        "body": "The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frontend development, it might not be the best idea to jump right into a framework as your first step - grasp the basics then come back! Prior experience with other frameworks helps, but is not required",
        "tags": [
          "react",
          "html",
          "angular"
        ]
      },
      {
        "id": 9586,
        "title": "vue is same as react",
        "body": "Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken",
        "tags": [
          "node",
          "vue",
          "html",
          "css",
          "javascript"
        ]
      },
      {
        "id": 1303,
        "title": "Aitai",
        "body": "推しさんがcoverしてたので聞きに来たのですが、声がどタイプすぎます…！\nこんな素敵な曲を作ってくださったもさを。さんも、この曲をカバーしてくれた推しもありがとう😊✨",
        "tags": [
          "vue",
          "react",
          "ruby",
          "rubyonrails",
          "css",
          "html"
        ]
      }
    ]
  
  },
  mutations: {
    DELETE_POST(state, id) {
      state.posts.filter(post => post.id !== id);
    },
  },
  actions: {
    deletePost({ commit }, id) {
      commit('DELETE_POST', id);
    }
  },
});