<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        v-model="todo.completed"
        type="checkbox"
        data-test="todo-checkbox"
      >
    </div>

    <form
      data-test="form"
      @submit.prevent="createTodo"
    >
      <input
        v-model="newTodo"
        data-test="new-todo"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  
  data() {
      return {
          todos: [
              {
                  id: 1,
                  text: 'Learn Vue.js 3',
                  completed: false
              }
          ],
          newTodo: ''
      }
  },

   methods: {
    createTodo() {
      this.todos.push({
        id: 2,
        text: this.newTodo,
        completed: false
      })
    }
  }
}
</script>

<style>

</style>