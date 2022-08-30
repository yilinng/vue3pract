<template>
  <div>
    <form action="">
      <input
        id="username"
        type="text"
        name=""
        placeholder="username"
      >
      <button @click="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
    emits:['submit'],
    methods: {
        submit(){
            this.$emit('submit', this.email)
        }
    }
}
</script>

<style scoped>

</style>